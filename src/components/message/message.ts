// import base class
import { Block, IProps } from '../../classes/Block'

// import template
import template from './message.pug'

// component
class Message extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default Message
