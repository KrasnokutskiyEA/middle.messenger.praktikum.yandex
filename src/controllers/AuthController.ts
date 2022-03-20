import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'

class AuthController {
  public signIn (user: object): void {
    console.log('----signing in..........user=', user)
    showOverlaySpinner()

    setTimeout(() => {
      hideOverlay()
      showMessage('this is text', ['message-success'])
    }, 5000)
  }

  public changePassword (password: object): void {
    console.log('----changing password..........password=', password)
    // showMessage('this is text', ['message-success'])
    showOverlaySpinner()

    setTimeout(() => {
      hideOverlay()
    }, 5000)
  }
}

export default new AuthController()
