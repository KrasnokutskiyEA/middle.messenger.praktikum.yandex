import { showOverlaySpinner, hideOverlay } from '../helpers/showComponents'

class ChatController {
  public createChat (chat: object): void {
    console.log('----creating chat..........chat=', chat)
    // close modal window
    hideOverlay()
    // showMessage('this is text', ['message-success'])
    // show spinner
    showOverlaySpinner()

    // hide spinner
    setTimeout(() => {
      hideOverlay()
    }, 5000)
  }

  public addUserToChat (user: object): void {
    console.log('----adding user to chat..........user=', user)
    hideOverlay()
    // showMessage('this is text', ['message-success'])
    showOverlaySpinner()

    setTimeout(() => {
      hideOverlay()
    }, 5000)
  }

  public removeUserFromChat (user: object): void {
    console.log('----removing user from chat..........user=', user)
    hideOverlay()
    // showMessage('this is text', ['message-success'])
    showOverlaySpinner()

    setTimeout(() => {
      hideOverlay()
    }, 5000)
  }
}

export default new ChatController()
