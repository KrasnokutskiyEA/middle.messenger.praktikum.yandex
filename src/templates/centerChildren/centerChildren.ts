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
          text: 'BTN - 0',
          classes: ['mt-6'],
          withInternalId: true,
          events: {
            click: (event: any) => console.log('OLD 0 EVENT=', event)
          }
        })
      },

      ...{
        childrenList: [
          new Button({
            type: 'button',
            text: 'BTN - 1',
            classes: ['mt-6'],
            withInternalId: true,
            events: {
              click: (event: any) => console.log('OLD1 EVENT=', event)
            }
          }),
          new Button({
            type: 'button',
            text: 'BTN - 2',
            classes: ['mt-6'],
            withInternalId: true,
            events: {
              click: (event: any) => console.log('OLD2 EVENT=', event)
            }
          }),
          new Button({
            type: 'button',
            text: 'BTN - 3',
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

  init (): void {
    setTimeout(() => {
      console.log('------5 sec passed')
      this.children.button.setProps({
        text: 'NEW 5 SEC',
        events: {
          click: (event: any) => console.log('NEW EVENT 5=', event)
        }
      })
      // this.children.childrenList.forEach(el => el.setProps({
      //   text: 'NEW777',
      //   events: {
      //     click: (event: any) => console.log('NEW EVENT 777=', event)
      //   }
      // }))
    }, 5000)
  }

  componentDidMount (): void {

  }

  componentDidUpdate (oldProps, newProps): boolean {
    return true
  }

  render (): HTMLElement {
    return this.compile(compileTemplate, this.props)
  }
}

export default CenterChildren
