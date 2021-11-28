import compileTemplate from './500.pug';
import serverErrorLogo from '../../assets/images/fire.svg'

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  serverErrorLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));