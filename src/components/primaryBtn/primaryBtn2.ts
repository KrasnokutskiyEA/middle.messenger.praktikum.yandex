import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './primaryBtn2.pug'

class Button extends Block {
  constructor (props: IBloc) {
    super('div', {
      type: props.type,
      text: props.text,
      classes: props.classes,
      withInternalId: props.withInternalId,
      events: props.events
    })
  }

  render (): HTMLElement {
    return compileTemplate(this.props)
  }

  componentDidUpdate (prev: IBloc, next: IBloc): boolean {
    console.log('componentDidUpdate prev=', prev, 'next=', next)
    return true
  }
}

export default Button
