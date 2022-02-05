import Message from '../components/message/message'

export const showMessage = (text: string, classes: string[]): void => {
  const message = new Message({ text, classes })

  document.body.append(message.getContent())
  setTimeout(() => { message.unmount() }, 3000)
}
