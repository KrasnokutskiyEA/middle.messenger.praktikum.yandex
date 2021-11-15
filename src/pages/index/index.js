import compileTemplate from './index.pug';
import '../../assets/styles/global.scss';
import * as classes from  './index.module.scss';

// 1 - generate context
const ctx = { 
  classes,
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
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));