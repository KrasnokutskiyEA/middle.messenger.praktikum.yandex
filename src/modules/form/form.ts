import { Block, IProps } from '../../classes/Block'

// template imports
import template from './form.pug'

// component
export default class Form extends Block {
  constructor (props: IProps) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
