import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './centerChildren.pug'

class CenterChildren extends Block {
  constructor (props: IBloc) {
    super('div', {
      type: props.type,
      withInternalId: props.withInternalId,
      button: props.button
    })
  }

  render (): HTMLElement {
    // return compileTemplate(this.props)
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterChildren
