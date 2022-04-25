import BaseApi from './BaseApi'
import { TResponse } from '../types/api'
import { IUserApiSearch, IUserApiUpdateProfile } from '../interfaces/IUserApi'

class UserApi extends BaseApi {
  constructor () {
    super({ path: '/user' })
  }

  async search (data: IUserApiSearch): Promise<TResponse> {
    return this.post('/search', { withCredentials: true, data: JSON.stringify(data) })
  }

  async updateProfile (data: IUserApiUpdateProfile): Promise<TResponse> {
    return this.put('/profile', { withCredentials: true, data: JSON.stringify(data) })
  }

  async updateAvatar (data: FormData): Promise<TResponse> {
    return this.put('/profile/avatar', { headers: {}, withCredentials: true, data })
  }
}

export default new UserApi()
