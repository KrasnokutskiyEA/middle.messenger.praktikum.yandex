import compileTemplate from './profile.pug';
import avatarLogo from '../../assets/images/avatar.svg'
import arrowLogo from '../../assets/images/arrow.svg'

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  avatarLogo,
  arrowLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));