import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './centerChildren.pug'
import Button from '../../components/primaryBtn/primaryBtn2'

class CenterChildren extends Block {
  constructor (props: IBloc) {
    console.log('SUPER-------START')
    super('div', {
      ...props,
      ...{
        button: new Button({
          type: 'button',
          text: 'OLD',
          classes: ['mt-6'],
          withInternalId: true,
          events: {
            click: (event: any) => console.log('OLD EVENT=', event)
          }
        })
      }
    })
    console.log('SUPER-------END')
  }

  componentDidMount (): void {
    console.log('COMPONENT-DID-MOUNT')
  }

  componentDidUpdate (oldProps, newProps): boolean {
    this.children.button.setProps(newProps)

    return true
  }

  render (): HTMLElement {
    console.log('RENDER')
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterChildren
