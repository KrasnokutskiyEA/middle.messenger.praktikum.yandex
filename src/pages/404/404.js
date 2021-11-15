import compileTemplate from './404.pug';
import '../../assets/styles/global.scss';
import pageNotFoundLogo from '../../assets/images/ghost.svg'
import * as classes from  './404.module.scss';



// 1 - generate context
const ctx = {
  classes,
  pageNotFoundLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));
