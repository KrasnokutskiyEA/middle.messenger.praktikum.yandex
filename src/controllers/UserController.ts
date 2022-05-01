import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'
import userApi from '../api/UserApi'
import { TResponse } from '../types/api'
import { IUserApiSearch, IUserApiUpdateProfile } from '../interfaces/IUserApi'
import showError from '../helpers/showError'
import store from '../store'

class UserController {
  async updateProfile (user: IUserApiUpdateProfile): Promise<void> {
    try {
      showOverlaySpinner()
      await userApi.updateProfile(user)
      showMessage('Your profile has been updated', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async search (user: IUserApiSearch): Promise<undefined | TResponse> {
    try {
      const users = await userApi.search(user)
      return users
    } catch (e) {
      showError(e)
    }
  }

  async updateAvatar (data: FormData): Promise<void> {
    try {
      showOverlaySpinner()
      const user = await userApi.updateAvatar(data)
      store.setState('user', user)
      showMessage('Your avatar has been updated', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }
}

export default new UserController()
