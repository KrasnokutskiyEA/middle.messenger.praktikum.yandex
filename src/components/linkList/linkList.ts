// import base class
import { Block, type IProps } from '../../classes/Block'

// import template
import template from './linkList.pug'

// component
export default class LinkList extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
