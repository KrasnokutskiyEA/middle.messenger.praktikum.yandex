// import base class
import { Block, IProps } from '../../../classes/Block'

// import template
import template from './chatSettingsDropdown.pug'

// component
class ChatSettingsDropdown extends Block {
  readonly unmountDropdown: () => void
  readonly handleOverlay: () => void

  constructor (props: IProps) {
    super('div', props)
    this.unmountDropdown = () => this.unmount()
    this.handleOverlay = this.unmountDropdown.bind(this)
    document.addEventListener('mousedown', this.handleOverlay)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }

  componentDidUnmount (): void {
    document.removeEventListener('mousedown', this.handleOverlay)
  }
}

export default ChatSettingsDropdown
