import compileTemplate from './500.pug';
import serverErrorLogo from '../../assets/images/fire.svg'
import '../../assets/styles/global.scss';

// parent and children styles
import * as classes from  './500.module.scss';
import * as parentClasses from  '../../templates/centerChildren/centerChildren.module.scss';
import * as errorMessageClasses from '../../components/errorMessage/errorMessage.module.scss';

// 1 - generate context
const ctx = {
  classes,
  parentClasses,
  errorMessageClasses,
  serverErrorLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));