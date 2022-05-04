import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'
import authApi from '../api/AuthApi'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'
import showError from '../helpers/showError'
import store from '../store'
import router from '../router'

class AuthController {
  async signIn (user: IAuthApiSignIn): Promise<void> {
    try {
      showOverlaySpinner()
      await authApi.signIn(user)
      hideOverlay()
      showMessage('You have signed in', ['message-success'])
      router.go('/')
    } catch (e) {
      showError(e)
      hideOverlay()
    }
  }

  async signUp (user: IAuthApiSignUp): Promise<void> {
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
  }

  async checkAuth (): Promise<void> {
    try {
      const user = await authApi.checkAuth()
      store.setState('user', user)
    } catch (e) {
      showError(e)
      router.go('/sign-in')
    }
  }

  async logout (): Promise<void> {
    try {
      showOverlaySpinner()
      await authApi.logout()
      router.go('/sign-in')
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }
}

export default new AuthController()
