import { Block, IProps } from './Block'

function isEqual (lhs: string, rhs: string): Boolean {
  return lhs === rhs
}

function render (query: string, block: Block): HTMLElement | false {
  const root = document.getElementById(query)
  if (root) {
    root.append(block.getContent())
    return root
  }
  return false
}

export default class Route {
  readonly _pathname: string
  readonly _blockClass: typeof Block
  private _block: Block | null
  readonly _props: IProps

  constructor (pathname: string, view: typeof Block, props: IProps) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  get pathname (): string {
    return this._pathname
  }

  public leave (): void {
    if (this._block) {
      this._block.unmount()
    }
  }

  public match (pathname: string): Boolean {
    return isEqual(pathname, this._pathname)
  }

  public render (): void {
    this._block = new this._blockClass()
    render(this._props.rootQuery, this._block)
  }
}
