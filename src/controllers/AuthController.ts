import { showMessage } from '../helpers/infoMessage'

class AuthController {
  public signIn (user: object): void {
    console.log('----signing in..........user=', user)
    showMessage('this is text', ['message-success'])
  }
}

export default new AuthController()
