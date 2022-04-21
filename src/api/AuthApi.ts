import BaseApi from './BaseApi'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'

class AuthApi extends BaseApi {
  constructor () {
    super({ path: '/auth' })
  }

  async signUp (data: IAuthApiSignUp): Promise<Record<string, any>> {
    return this.post('/signup', { data })
  }

  async signIn (data: IAuthApiSignIn): Promise<Record<string, any>> {
    return this.post('/signin', { withCredentials: true, data })
  }

  async checkAuth (): Promise<Record<string, any>> {
    return this.get('/user', { withCredentials: true })
  }

  async logout (): Promise<Record<string, any>> {
    return this.post('/logout', { withCredentials: true })
  }
}

export default new AuthApi()
