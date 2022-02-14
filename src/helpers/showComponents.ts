import Message from '../components/message/message'
import Spinner from '../components/spinner/spinner'
import Overlay from '../components/overlay/overlay'
import SecondaryBtn from '../components/secondaryBtn/secondaryBtn'
import ChatSettingsDropdown from '../components/chat/chatSettingsDropdown/chatSettingsDropdown'

export const showMessage = (text: string, classes: string[]): void => {
  if (!Message.instance) {
    document.body.append(new Message({ text, classes }).getContent())
    setTimeout(() => { Message.instance!.unmount() }, 3000)
  }
}

export const showSpinner = (): void => {
  document.querySelector<HTMLElement>('#app')!.style.filter = 'blur(4px)'
  document.body.append(Overlay.getInstance({ content: Spinner }).getContent())
}

export const hideSpinner = (): void => {
  document.querySelector<HTMLElement>('#app')!.removeAttribute('style')
  Overlay.instance.unmount()
}

export const showChatSettingsMenu = (ctx: { childrenList: SecondaryBtn[] }): void => {
  document.body.append(new ChatSettingsDropdown(ctx).getContent())
}
