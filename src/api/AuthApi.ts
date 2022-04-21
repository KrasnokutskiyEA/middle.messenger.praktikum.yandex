import BaseApi from './BaseApi'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'

class AuthApi extends BaseApi {
  constructor () {
    super({ path: '/auth' })
  }

  public async signUp (data: IAuthApiSignUp): Promise<Record<string, any>> {
    return this.post('/signup', { data })
  }

  public async signIn (data: IAuthApiSignIn): Promise<Record<string, any>> {
    return this.post('/signin', { withCredentials: true, data })
  }

  public checkAuth (): Record<any, any> {
    return this.get('/user', {
      withCredentials: true
    })
  }

  public signOut (): Record<any, any> {
    return this.post('/logout', {
      withCredentials: true
    })
  }
}

export default new AuthApi()
