// import base class
import { Block } from '../../../classes/Block'

// import template
import template from './chatTitle.pug'

// import assets
import defaultAvatar from '../../../assets/images/avatar.svg'

// props interface
interface IChatTitle {
  chatName: string
  chatAvatar: string | null
  classes: string[]
}

// component
class ChatTitle extends Block {
  constructor (props: IChatTitle) {
    super('div', {
      chatName: props.chatName,
      classes: props.classes,
      chatAvatar: props.chatAvatar ?? defaultAvatar
    })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default ChatTitle
