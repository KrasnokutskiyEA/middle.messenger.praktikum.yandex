import { /* showMessage */ showSpinner, hideSpinner } from '../helpers/showComponents'

class AuthController {
  public signIn (user: object): void {
    // console.log('----signing in..........user=', user)
    // showMessage('this is text', ['message-success'])
    showSpinner()

    setTimeout(() => {
      hideSpinner()
    }, 5000)
  }

  public changePassword (password: object): void {
    console.log('----changing password..........password=', password)
    // showMessage('this is text', ['message-success'])
    showSpinner()

    setTimeout(() => {
      hideSpinner()
    }, 5000)
  }
}

export default new AuthController()
