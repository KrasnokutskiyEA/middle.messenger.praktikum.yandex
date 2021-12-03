import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './primaryBtn2.pug'

class Button extends Block {
  constructor (props: IBloc) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(compileTemplate, this.props)
  }
}

export default Button
