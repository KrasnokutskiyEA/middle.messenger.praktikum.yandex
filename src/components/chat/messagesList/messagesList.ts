// import base class
import { Block, IBloc } from '../../../classes/Block'

// import template
import template from './messagesList.pug'

// component
class MessagesList extends Block {
  constructor (props: IBloc) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default MessagesList
