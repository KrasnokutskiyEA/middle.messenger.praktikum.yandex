import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './centerChildren.pug'
import Button from '../../components/primaryBtn/primaryBtn2'

class CenterChildren extends Block {
  constructor (props: IBloc) {
    super('div', props)

    // this.children.button = new Button({
    //   text: this.props.text
    // })
  }

  componentDidUpdate (oldProps, newProps): boolean {
    this.children.button.setProps(newProps)

    return true
  }

  render (): HTMLElement {
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterChildren
