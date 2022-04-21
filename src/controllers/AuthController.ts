import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'
import authApi from '../api/AuthApi'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'
import showError from '../helpers/showError'
import router from '../router'

class AuthController {
  public async signIn (user: IAuthApiSignIn): Promise<void> {
    try {
      showOverlaySpinner()
      await authApi.signIn(user)
      showMessage('You have signed in', ['message-success'])
      router.go('/')
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  public async signUp (user: IAuthApiSignUp): Promise<void> {
    try {
      showOverlaySpinner()
      await authApi.signUp(user)
      showMessage('Account has been created', ['message-success'])
      router.go('/sign-in')
    } catch (e) {
      showError(e)
    } finally {
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
