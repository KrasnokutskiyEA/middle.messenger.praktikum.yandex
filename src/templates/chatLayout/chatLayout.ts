import { Block, IProps } from '../../classes/Block'

// template imports
import template from './chatLayout.pug'

// component
class chatLayout extends Block {
  constructor (props: IProps) {
    super('div', { ...props })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default chatLayout
