import { Block, IBloc } from '../../classes/Block'

// template imports
import compileTemplate from './centerContent.pug'

// component
class CenterContent extends Block {
  constructor (props: IBloc) {
    super('div', { ...props })
  }

  init (): void {}

  componentDidMount (): void {}

  componentDidUpdate (oldProps, newProps): boolean {
    return true
  }

  render (): HTMLElement {
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterContent
