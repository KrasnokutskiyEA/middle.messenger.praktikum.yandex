import compileTemplate from './index.pug';
import '../../assets/styles/global.scss';
import * as classes from  './index.module.scss';

// 1 - generate context
const ctx = { 
  classes,
  404: 'hello',
  500: '',
  chat: '',
  createAccount: '',
  profile: '',
  signIn: ''
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));