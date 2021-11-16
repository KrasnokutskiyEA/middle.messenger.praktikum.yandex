import compileTemplate from './404.pug';
import pageNotFoundLogo from '../../assets/images/ghost.svg'
import '../../assets/styles/global.scss';

// parent and children styles
import * as classes from  './404.module.scss';
import * as parentClasses from  '../../templates/centerChildren/centerChildren.module.scss';
import * as errorMessageClasses from '../../components/errorMessage/errorMessage.module.scss';

// 1 - generate context
const ctx = {
  classes,
  parentClasses,
  errorMessageClasses,
  pageNotFoundLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));
