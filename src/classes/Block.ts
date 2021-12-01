import EventBus from './EventBus'

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }

  _element = null
  _meta = null

  constructor (tagName = 'div', props = {}) {
    const eventBus = new EventBus()

    this._meta = {
      tagName,
      props
    }

    this.props = this._makePropsProxy(props)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  _registerEvents (eventBus: any): any {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources (): any {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init (): any {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidMount (): any {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount (oldProps): any {

  }

  _componentDidUpdate (oldProps, newProps): any {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate (oldProps, newProps): any {
    return true
  }

  setProps = (nextProps: any): any => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element (): any {
    return this._element
  }

  _render (): any {
    const block = this.render()
    console.log('_render method block=', block, 'this._element=', this._element)
    this._element.innerHTML = block
  }

  render (): any {}

  getContent (): any {
    return this.element
  }

  _makePropsProxy (props): any {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this

    return new Proxy(props, {
      get (target, prop) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set (target, prop, value) {
        target[prop] = value

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU)
        return true
      },
      deleteProperty () {
        throw new Error('Нет доступа')
      }
    })
  }

  _createDocumentElement (tagName): any {
    // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
    return document.createElement(tagName)
  }

  show (): any {
    this.getContent().style.display = 'block'
  }

  hide (): any {
    this.getContent().style.display = 'none'
  }
}
