// import base class
import { Block, IProps } from '../../../classes/Block'

// import template
import template from './chatsList.pug'

// component
export default class ChatsList extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
