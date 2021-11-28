import compileTemplate from './signIn.pug';

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));