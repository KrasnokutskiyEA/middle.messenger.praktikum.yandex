// import base class
import { Block, IBloc } from '../../classes/Block'

// import template
import template from './roundBtn.pug'

// component
class RoundBtn extends Block {
  constructor (props: IBloc) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default RoundBtn
