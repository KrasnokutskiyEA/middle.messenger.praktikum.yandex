// import ChatPage from './pages/chat/chat'
// import ProfilePage from './pages/ProfilePage/ProfilePage'
// import SignInPage from './pages/SignInPage/SignInPage'
// import SignUpPage from './pages/SignUpPage/SignUpPage'
// import PasswordPage from './pages/PasswordPage/PasswordPage'
import Page404 from './pages/404/404'
import Page500 from './pages/500/500'
import router from './router'
// import { authController } from './controllers'
import './assets/styles/index.scss'

router
  // .setUnprotectedPaths(['/sign-in', '/sign-up', '/500'])
  // .onRoute(authController.checkAuth)
  .use('/', Page404)
  // .use('/profile', ProfilePage)
  // .use('/sign-in', SignInPage)
  // .use('/sign-up', SignUpPage)
  // .use('/password', PasswordPage)
  .use('/500', Page500)
  // .use('*', Error404Page)
  .start()
