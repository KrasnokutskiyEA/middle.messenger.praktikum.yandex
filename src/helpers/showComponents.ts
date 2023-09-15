import Message from '../components/message/message'
import Spinner from '../components/spinner/spinner'
import Overlay from '../components/overlay/overlay'
import ChatSettingsDropdown from '../components/chat/chatSettingsDropdown/chatSettingsDropdown'

import type Form from '../modules/form/form'
import type SecondaryBtn from '../components/secondaryBtn/secondaryBtn'

export const showMessage = (text: string, classes: string[]): void => {
  if (!Message.instance) {
    document.body.append(new Message({ text, classes }).getContent())
    setTimeout(() => { Message.instance!.unmount() }, 3000)
  }
}

export const showOverlaySpinner = (): void => {
  document.body.append(new Overlay({ content: Spinner, isClosable: false }).getContent())
}

export const showOverlayModal = (ctx: { content: Form }): void => {
  document.body.append(new Overlay({ ...ctx, isClosable: true }).getContent())
}

export const hideOverlay = (): void => {
  Overlay.instance!.unmount()
}

export const showChatSettingsMenu = (ctx: { childrenList: SecondaryBtn[] }): void => {
  document.body.append(new ChatSettingsDropdown(ctx).getContent())
}

export const hideChatSettingsMenu = (): void => {
  ChatSettingsDropdown.instance!.unmount()
}
