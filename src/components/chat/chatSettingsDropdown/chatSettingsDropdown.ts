// import base class
import { Block, type IProps } from '../../../classes/Block'

// import template
import template from './chatSettingsDropdown.pug'

// component
export default class ChatSettingsDropdown extends Block {
  static instance: ChatSettingsDropdown | undefined

  readonly unmountDropdown: (evt: MouseEvent) => void
  readonly handleOverlay: (evt: MouseEvent) => void

  constructor (props: IProps) {
    super('div', props)
    ChatSettingsDropdown.instance = this

    this.unmountDropdown = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement
      target.className === 'chat-settings-dropdown-overlay' && this.unmount()
    }
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
