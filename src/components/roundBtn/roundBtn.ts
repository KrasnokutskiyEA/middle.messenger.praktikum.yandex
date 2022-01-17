// import base class
import { Block, IProps } from '../../classes/Block'

// import template
import template from './roundBtn.pug'

// component
class RoundBtn extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default RoundBtn
