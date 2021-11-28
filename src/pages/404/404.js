import compileTemplate from './404.pug';
import pageNotFoundLogo from '../../assets/images/ghost.svg'

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  pageNotFoundLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));
