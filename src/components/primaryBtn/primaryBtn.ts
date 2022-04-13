// import base class
import { Block, IProps } from '../../classes/Block'

// import template
import template from './primaryBtn.pug'

// component
export default class PrimaryBtn extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  setDisabled (isDisabled: boolean): void {
    isDisabled ? this.setProps({ disabled: true }) : this.setProps({ disabled: false })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
