import compileTemplate from './index.pug';

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = { 
  pages: {
    404: '/404.html',
    500: '/500.html',
    chat: '/chat.html',
    createAccount: '/createAccount.html',
    profile: '/profile.html',
    signIn: '/signIn.html'
  }
}

// 2 - generate markup
const app = document.getElementById('app')
app.innerHTML = ''
app.insertAdjacentHTML('afterbegin', compileTemplate(ctx));