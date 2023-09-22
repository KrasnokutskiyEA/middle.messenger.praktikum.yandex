// import base class
import { Block, type IProps } from '../../classes/Block'

// import template
import template from './overlay.pug'

// component
export default class Overlay extends Block {
  static instance: Overlay | undefined

  readonly unmountDropdown: (evt: MouseEvent) => void
  readonly handleOverlay: (evt: MouseEvent) => void

  constructor (props: IProps) {
    super('div', props)
    Overlay.instance = this

    this.unmountDropdown = (evt: MouseEvent): void => {
      const target = evt.target as Element

      if (target.id === 'overlay' && props.isClosable) {
        this.unmount()
      }
    }
    this.handleOverlay = this.unmountDropdown.bind(this)
    document.addEventListener('mousedown', this.handleOverlay)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }

  componentDidMount (): void {
    const canvas = document.querySelector('#app')

    if (canvas instanceof HTMLElement) {
      canvas.style.filter = 'blur(4px)'
    }
  }

  componentDidUnmount (): void {
    const canvas = document.querySelector('#app')

    if (canvas instanceof HTMLElement) {
      canvas.removeAttribute('style')
      document.removeEventListener('mousedown', this.handleOverlay)
      Overlay.instance = undefined
    }
  }
}
