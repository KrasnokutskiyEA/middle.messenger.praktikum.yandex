import compileTemplate from './chat.pug';
import arrowLogo from '../../assets/images/arrow.svg'

// styles
import '../../assets/styles/global.scss';
import * as pageStyles from  './chat.module.scss';
import * as templateStyles from  '../../templates/centerChildren/centerChildren.module.scss';
import * as componentErrorMessageStyles from '../../components/errorMessage/errorMessage.module.scss';
import * as componentRoundBtnStyles from '../../components/roundBtn/roundBtn.module.scss';

// 1 - generate context
const ctx = {
  pageStyles,
  templateStyles,
  componentErrorMessageStyles,
  componentRoundBtnStyles,
  arrowLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));