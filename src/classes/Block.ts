import { v4 as uuidv4 } from 'uuid'
import EventBus from './EventBus'

/* props schema */
export interface IBloc {
  withInternalId?: boolean
  events?: {[key: string]: any}
  children?: {[key: string]: any}
  classes?: string[]
  text?: string
  type?: string
  [index: string]: any
}

export class Block {
  /* class properties */
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }

  private _element!: HTMLElement
  readonly _meta: { tagName: string, propsAndChildren: IBloc }
  readonly _id: string
  readonly props: IBloc
  readonly children: {[key: string]: any}
  readonly eventBus: () => EventBus

  /* constructor */
  constructor (tagName = 'div', propsAndChildren: IBloc) {
    const eventBus = new EventBus()
    this._meta = { tagName, propsAndChildren }
    this._id = propsAndChildren.withInternalId === true ? uuidv4() : ''
    this.props = this._makePropsProxy({ ...propsAndChildren, _id: this._id })
    const { children } = this._getChildren(propsAndChildren)
    this.children = children ?? {}
    this.eventBus = () => eventBus
    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  /* getters */
  get element (): HTMLElement | undefined {
    return this._element
  }

  /* private methods */
  private _getChildren (propsAndChildren: IBloc): IBloc {
    const children: IBloc = {}
    const props: IBloc = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else {
        props[key] = value
      }
    })

    return { children, props }
  }

  private _registerEvents (eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createResources (): void {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  private _init (): void {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  private _componentDidMount (): void {
    this.componentDidMount()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)

    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount()
    })
  }

  private _componentDidUpdate (oldProps: IBloc, newProps: IBloc): void {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  private _render (): void {
    const block = this.render()

    if (block !== undefined) {
      this._element.innerHTML = ''
      this._element.appendChild(block)

      this._addEvents() // add new event handlers
    }
  }

  private _addEvents (): void {
    const { events = {} } = this.props

    Object.entries(events).forEach(([eventName, evt]) => {
      this._element?.addEventListener(eventName, evt)
    })
  }

  private _removeEvents (): void {
    const { events = {} } = this.props

    Object.entries(events).forEach(([eventName, evt]) => {
      this._element?.removeEventListener(eventName, evt)
    })
  }

  private _makePropsProxy (props: IBloc): IBloc {
    return new Proxy(props, {
      get (target, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },

      set: (target, prop: string, value) => {
        target[prop] = value
        return true
      },

      deleteProperty () {
        throw new Error('Нет доступа')
      }
    })
  }

  private _createDocumentElement (tagName: string): HTMLElement {
    const element = document.createElement(tagName)
    if (this.props.withInternalId ?? false) {
      element.setAttribute('data-id', this._id)
    }
    return element
  }

  /* public methods */
  public render (): void {}

  public componentDidMount (): void {}

  public dispatchComponentDidMount (): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  public getContent (): HTMLElement {
    return this.element
  }

  public componentDidUpdate (oldProps: IBloc, newProps: IBloc): boolean {
    return true
  }

  public setProps = (nextProps: IBloc): void => {
    if (!nextProps) {
      return
    }

    // 1 - remove old event handlers
    this._removeEvents()

    Object.assign(this.props, nextProps)
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this._meta.props, nextProps) // emit CDU
  }

  public show (): void {
    this.getContent().style.display = 'block'
  }

  public hide (): void {
    this.getContent().style.display = 'none'
  }

  public compile (compileTemplate: any, props: IBloc): HTMLElement {
    const propsAndStubs = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`
    })

    const fragment = this._createDocumentElement('template')

    fragment.innerHTML = compileTemplate(propsAndStubs)

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      stub.replaceWith(child.getContent())
    })

    return fragment.content
  }
}
