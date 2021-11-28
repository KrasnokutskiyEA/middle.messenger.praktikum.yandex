import compileTemplate from './chat.pug';
import arrowLogo from '../../assets/images/arrow.svg'

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  parameters: {
    code: '418',
    message: 'Coming soon...',
    linkTo: '/index.html',
    linkMessage: 'Go Back'
  },
  arrowLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));