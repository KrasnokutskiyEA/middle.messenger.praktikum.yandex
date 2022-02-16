import { showSpinner, hideSpinner } from '../helpers/showComponents'

class ChatController {
  public createChat (chat: object): void {
    console.log('----creating chat..........chat=', chat)
    hideSpinner()
    // showMessage('this is text', ['message-success'])
    showSpinner()

    setTimeout(() => {
      hideSpinner()
    }, 5000)
  }
}

export default new ChatController()
