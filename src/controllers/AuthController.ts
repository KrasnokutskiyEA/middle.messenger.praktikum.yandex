import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'
import authApi from '../api/AuthApi'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'

class AuthController {
  public signIn (user: object): void {
    console.log('----signing in..........user=', user)
    showOverlaySpinner()

    setTimeout(() => {
      hideOverlay()
      showMessage('this is text', ['message-success'])
    }, 5000)
  }

  public signUp (user: IAuthApiSignUp): void {
    console.log('99----signing up..........user=', user)
    try {
      showOverlaySpinner()
      const res = authApi.signUp(user)
      console.log('99------res=', res)
    } catch (e) {
      console.log('99-----ERR=', e)
    } finally {
      console.log('99-----FINALLY')
      hideOverlay()
    }
    // return authApi.signUp(user)
    //   .then(() => {
    //     showToast('Вы зарегистрировались', 'success')
    //     router.go('/sign-in')
    //   })
    //   .catch(handleError)
    //   .finally(() => {
    //     hidePreloader()
    //   })

    // setTimeout(() => {
    //   hideOverlay()
    //   showMessage('Вы зарегистрировались', ['message-success'])
    // }, 5000)
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
