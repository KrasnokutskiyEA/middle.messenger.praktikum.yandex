// import base class
import { Block } from '../../../classes/Block'

// import template
import template from './messageCard.pug'

// import helpers
import formatTime from '../../../helpers/formatTime'

// import assets
// import defaultAvatar from '../../../assets/images/avatar.svg'

// props interface
interface IMessageCard {
  id: string
  ownerId: string
  authorId: string
  authorName: string
  text: string
  image: string | null
  date: string
}

// component
class MessageCard extends Block {
  constructor (props: IMessageCard) {
    super('div', {
      id: props.id,
      ownerId: props.ownerId,
      authorId: props.authorId,
      authorName: props.authorName,
      text: props.text,
      image: props.image,
      time: formatTime(props.date)
    })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default MessageCard
