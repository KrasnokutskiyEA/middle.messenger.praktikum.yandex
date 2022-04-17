import BaseApi from './BaseApi'
import { IAuthApiSignIn, IAuthApiSignUp } from '../interfaces/IAuthApi'

class AuthApi extends BaseApi {
  constructor () {
    super({ path: '/auth' })
  }

  public signUp (data: IAuthApiSignUp): Record<string, unknown> {
    return this.post('/signup', { data })
  }

  public signIn (data: IAuthApiSignIn): Record<any, any> {
    return this.post('/signin', {
      withCredentials: true,
      data: JSON.stringify(data)
    })
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
