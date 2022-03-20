// import base class
import { Block, IProps } from '../../classes/Block'

// import template
import template from './message.pug'

// component
class Message extends Block {
  static instance: Message | undefined

  constructor (props: IProps) {
    super('div', props)
    Message.instance = this
  }

  componentDidUnmount (): void {
    Message.instance = undefined
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default Message
