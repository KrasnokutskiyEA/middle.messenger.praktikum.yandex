// import base class
import { Block, IProps } from '../../../classes/Block'

// import template
import template from './chatsList.pug'

import { formatChats } from '../../../helpers/fakeData'

// component
export default class ChatsList extends Block {
  constructor (props: IProps) {
    super('div', {
      chats: formatChats(props.chats),
      events: props.events
    })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
