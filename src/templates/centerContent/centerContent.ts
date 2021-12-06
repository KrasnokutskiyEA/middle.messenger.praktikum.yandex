import { Block, IBloc } from '../../classes/Block'

// template imports
import template from './centerContent.pug'

// component
class CenterContent extends Block {
  constructor (props: IBloc) {
    super('div', { ...props })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default CenterContent
