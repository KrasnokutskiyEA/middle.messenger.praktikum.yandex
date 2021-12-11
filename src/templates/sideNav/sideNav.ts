import { Block, IBloc } from '../../classes/Block'

// template imports
import template from './sideNav.pug'

// component
class sideNav extends Block {
  constructor (props: IBloc) {
    super('div', { ...props })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default sideNav