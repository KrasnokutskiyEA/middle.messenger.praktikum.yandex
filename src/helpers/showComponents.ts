import Message from '../components/message/message'
import Spinner from '../components/spinner/spinner'
import SecondaryBtn from '../components/secondaryBtn/secondaryBtn'
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

export const showChatSettingsMenu = (ctx: { childrenList: SecondaryBtn[] }): void => {
  document.body.append(new ChatSettingsDropdown(ctx).getContent())
}
