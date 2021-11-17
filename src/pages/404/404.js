import compileTemplate from './404.pug';
import pageNotFoundLogo from '../../assets/images/ghost.svg'

// styles
import '../../assets/styles/global.scss';
import * as pageStyles from  './404.module.scss';
import * as templateStyles from  '../../templates/centerChildren/centerChildren.module.scss';
import * as componentErrorMessageStyles from '../../components/errorMessage/errorMessage.module.scss';


// 1 - generate context
const ctx = {
  pageStyles,
  templateStyles,
  componentErrorMessageStyles,
  pageNotFoundLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));
