// import base class
import { Block, IBloc } from '../../classes/Block'

// import template
import template from './textField.pug'

// component
class TextField extends Block {
  constructor (props: IBloc) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default TextField
