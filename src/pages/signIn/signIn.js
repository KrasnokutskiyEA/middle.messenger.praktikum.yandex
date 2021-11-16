import compileTemplate from './signIn.pug';

// parent and children styles
import '../../assets/styles/global.scss';
import * as templateStyles from  '../../templates/centerChildren/centerChildren.module.scss';
import * as moduleSignInStyles from '../../modules/credentialsForm/credentialsForm.module.scss';

// 1 - generate context
const ctx = {
  templateStyles,
  moduleSignInStyles
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));