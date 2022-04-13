// import base class
import { Block } from '../../../classes/Block'

// import template
import template from './chatCard.pug'

// import helpers
import formatTime from '../../../helpers/formatTime'

// import assets
import defaultAvatar from '../../../assets/images/avatar.svg'

// props interface
interface IChatCard {
  id: string
  name: string
  isGroup: boolean
  lastMessage: string
  ownerLastMessage: string
  counterUnreadMessages: number
  avatar: string | null
  updatedAt: string
  events: { [key: string]: (event: Event) => void }
}

// component
export default class ChatCard extends Block {
  constructor (props: IChatCard) {
    super('div', {
      id: props.id,
      chatName: props.name,
      isGroup: props.isGroup,
      chatLastMessageText: props.lastMessage,
      ownerLastMessage: props.ownerLastMessage,
      chatUnreadMessagesQty: props.counterUnreadMessages,
      chatAvatar: props.avatar ?? defaultAvatar,
      chatLastMessageTime: props.updatedAt,
      chatLastMessageTimeFormatted: formatTime(props.updatedAt),
      events: props.events
    })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
