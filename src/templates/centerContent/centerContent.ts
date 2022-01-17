import { Block, IProps } from '../../classes/Block'

// template imports
import template from './centerContent.pug'

// component
class CenterContent extends Block {
  constructor (props: IProps) {
    super('div', { ...props })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default CenterContent
