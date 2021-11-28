import compileTemplate from './chat.pug';
import arrowLogo from '../../assets/images/arrow.svg'

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  arrowLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));