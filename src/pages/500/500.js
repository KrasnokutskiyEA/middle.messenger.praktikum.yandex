import compileTemplate from './500.pug';
import serverErrorLogo from '../../assets/images/fire.svg'

// styles
import '../../assets/styles/global.scss';
import * as pageStyles from  './500.module.scss';
import * as templateStyles from  '../../templates/centerChildren/centerChildren.module.scss';
import * as componentErrorMessageStyles from '../../components/errorMessage/errorMessage.module.scss';

// 1 - generate context
const ctx = {
  pageStyles,
  templateStyles,
  componentErrorMessageStyles,
  serverErrorLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));