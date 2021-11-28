import compileTemplate from './500.pug';
import serverErrorLogo from '../../assets/images/fire.svg'

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  parameters: {
    code: '500',
    message: 'Internal Server Error',
    linkTo: '/index.html',
    linkMessage: 'Go Back'
  },
  serverErrorLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));