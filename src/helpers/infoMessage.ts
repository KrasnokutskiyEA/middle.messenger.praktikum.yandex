import Message from '../components/message/message'
import Spinner from '../components/spinner/spinner'
import ChatSettingsDropdown from '../components/chat/chatSettingsDropdown/chatSettingsDropdown'

export const showMessage = (text: string, classes: string[]): void => {
  if (Message.props.text === '') {
    Message.setProps({ text, classes })
    document.body.append(Message.getContent())
    setTimeout(() => {
      Message.unmount()
      Message.setProps({ text: '' })
    }, 3000)
  }
}

export const showSpinner = (): void => {
  document.querySelector<HTMLElement>('#app')!.style.filter = 'blur(4px)'
  document.body.append(Spinner.getContent())
}

export const hideSpinner = (): void => {
  document.querySelector<HTMLElement>('#app')!.removeAttribute('style')
  Spinner.unmount()
}

export const showChatSettingsMenu = (): void => {
  document.body.append(ChatSettingsDropdown.getContent())
}

export const hideChatSettingsMenu = (): void => {
  ChatSettingsDropdown.unmount()
}
