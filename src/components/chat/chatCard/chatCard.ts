// import base class
import { Block, IProps } from '../../../classes/Block'

// import template
import template from './chatCard.pug'

// props interface
// export interface IChatCard {
//   id: number
//   title: string
//   lastMessage: {
//     id: number
//     user: Record<string, string>
//     content: string
//     time: string
//   }
//   unreadCount: number
//   avatar: string | null
//   events: { [key: string]: (event: Event) => void }
// }
import { formatChats } from '../../../helpers/fakeData'

// component
export default class ChatCard extends Block {
  constructor (props: IProps) {
    super('div', {
      chat: formatChats(props.chat),
      events: props.events
    })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
