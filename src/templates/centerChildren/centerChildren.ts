import { Block, IBloc } from '../../classes/Block'
import compileTemplate from './centerChildren.pug'
import Button from '../../components/primaryBtn/primaryBtn2'

class CenterChildren extends Block {
  constructor (props: IBloc) {
    super('div', {
      ...props,
      ...{
        button: new Button({
          type: 'button',
          text: 'OLD10',
          classes: ['mt-6'],
          withInternalId: true,
          events: {
            click: (event: any) => console.log('OLD10 EVENT=', event)
          }
        })
      },
      ...{
        childrenList: [
          new Button({
            type: 'button',
            text: 'OLD1',
            classes: ['mt-6'],
            withInternalId: true,
            events: {
              click: (event: any) => console.log('OLD1 EVENT=', event)
            }
          }),
          new Button({
            type: 'button',
            text: 'OLD2',
            classes: ['mt-6'],
            withInternalId: true,
            events: {
              click: (event: any) => console.log('OLD2 EVENT=', event)
            }
          }),
          new Button({
            type: 'button',
            text: 'OLD3',
            classes: ['mt-6'],
            withInternalId: true,
            events: {
              click: (event: any) => console.log('OLD3 EVENT=', event)
            }
          })
        ]
      }
    })
  }

  componentDidMount (): void {

  }

  componentDidUpdate (oldProps, newProps): boolean {
    this.children.button.setProps(newProps)
    this.children.childrenList.setProps(newProps)

    return true
  }

  render (): HTMLElement {
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterChildren
