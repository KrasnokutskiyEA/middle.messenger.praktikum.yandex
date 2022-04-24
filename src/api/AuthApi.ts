import BaseApi from './BaseApi'
import { TResponse } from '../types/api'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'

class AuthApi extends BaseApi {
  constructor () {
    super({ path: '/auth' })
  }

  async signUp (data: IAuthApiSignUp): Promise<TResponse> {
    return this.post('/signup', { data })
  }

  async signIn (data: IAuthApiSignIn): Promise<TResponse> {
    return this.post('/signin', { withCredentials: true, data })
  }

  async checkAuth (): Promise<TResponse> {
    return this.get('/user', { withCredentials: true })
  }

  async logout (): Promise<TResponse> {
    return this.post('/logout', { withCredentials: true })
  }
}

export default new AuthApi()
