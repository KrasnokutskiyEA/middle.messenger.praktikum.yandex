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

  public addUserToChat (user: object): void {
    console.log('----adding user to chat..........user=', user)
    hideSpinner()
    // showMessage('this is text', ['message-success'])
    showSpinner()

    setTimeout(() => {
      hideSpinner()
    }, 5000)
  }

  public removeUserFromChat (user: object): void {
    console.log('----removing user from chat..........user=', user)
    hideSpinner()
    // showMessage('this is text', ['message-success'])
    showSpinner()

    setTimeout(() => {
      hideSpinner()
    }, 5000)
  }
}

export default new ChatController()