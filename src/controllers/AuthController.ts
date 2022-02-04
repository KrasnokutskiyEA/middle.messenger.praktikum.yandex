class AuthController {
  public signIn (user: object): void {
    console.log('----signing in..........user=', user)
  }
}

export default new AuthController()
