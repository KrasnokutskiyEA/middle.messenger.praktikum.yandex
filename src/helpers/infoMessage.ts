import Message from '../components/message/message'

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
