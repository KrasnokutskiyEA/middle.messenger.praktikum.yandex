import Block from '../../classes/Block'
import compileTemplate from './primaryBtn2.pug'

interface IBtn {
  type: string
  text: string
  classes: string[]
}

class Button extends Block {
  // properties
  // type = ''
  // text = ''
  // classes = ['']

  // constructor
  constructor (props: IBtn) {
    // this.type = props.type
    // this.text = props.text
    // this.classes = props.classes
    super ('div', {
      type: props.type,
      text: props.text,
      classes: props.classes
    })
  }

  render (): any {
    return compileTemplate(this.props)
  }
}

export default Button
