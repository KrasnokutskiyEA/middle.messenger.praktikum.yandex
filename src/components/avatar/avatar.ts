// import base class
import { Block, IProps } from '../../classes/Block'

// import template
import template from './avatar.pug'

// component
class Avatar extends Block {
  constructor (props: IProps) {
    super('div', { ...props })
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default Avatar
