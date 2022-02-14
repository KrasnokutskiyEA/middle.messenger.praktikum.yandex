// import base class
import { Block, IProps } from '../../classes/Block'

// import template
import template from './overlay.pug'

// component
class Overlay extends Block {
  static instance: Overlay

  constructor (props: IProps) {
    super('div', props)
    Overlay.instance = this
  }

  static getInstance (opts: Object): Overlay {
    if (Overlay.instance === undefined) {
      Overlay.instance = new Overlay(opts)
    }
    return Overlay.instance
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}

export default Overlay
