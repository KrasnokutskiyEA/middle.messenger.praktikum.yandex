// import base class
import { Block, IProps } from '../../../classes/Block'

// import template
import template from './inputField.pug'

// component
class InputField extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default InputField
