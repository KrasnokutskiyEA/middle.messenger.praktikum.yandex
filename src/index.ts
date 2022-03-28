import PageChat from './pages/chat/chat'
import PageChangePassword from './pages/password/password'
import PageUserProfile from './pages/profile/profile'
import PageSignIn from './pages/signIn/signIn'
import PageCreateAccount from './pages/createAccount/createAccount'
import Page404 from './pages/404/404'
import Page500 from './pages/500/500'
import router from './router'
// import { authController } from './controllers'
import './assets/styles/index.scss'

router
  // .setUnprotectedPaths(['/sign-in', '/sign-up', '/500'])
  // .onRoute(authController.checkAuth)
  .use('/', PageChat)
  .use('/profile', PageUserProfile)
  .use('/sign-in', PageSignIn)
  .use('/create-account', PageCreateAccount)
  .use('/change-password', PageChangePassword)
  .use('/500', Page500)
  .use('*', Page404)
  .start()
