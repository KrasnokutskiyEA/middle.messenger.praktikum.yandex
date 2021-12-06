// import base class
import { Block, IBloc } from '../../classes/Block'

// import template
import template from './primaryBtn.pug'

// component
class Button extends Block {
  constructor (props: IBloc) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default Button
