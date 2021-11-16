import compileTemplate from './signIn.pug';
import '../../assets/styles/global.scss';

// parent and children styles
import * as parentClasses from  '../../templates/centerChildren/centerChildren.module.scss';
import * as signInClasses from '../../modules/credentialsForm/credentialsForm.module.scss';

// 1 - generate context
const ctx = {
  parentClasses,
  signInClasses
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));