import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './centerChildren.pug'
import Button from '../../components/primaryBtn/primaryBtn2'

const btn = new Button({
  type: 'button',
  text: 'old button',
  classes: ['mt-6'],
  withInternalId: true,
  events: {
    click: (event: any) => console.log('OLD EVENT=', event)
  }
})

class CenterChildren extends Block {
  constructor (props: IBloc) {
    super('div', props)
  }

  render (): HTMLElement {
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterChildren
