import compileTemplate from './profile.pug';

// parent and children styles
import '../../assets/styles/global.scss';
import * as templateStyles from  '../../templates/centerChildren/centerChildren.module.scss';
import * as moduleSignInStyles from '../../modules/credentialsForm/credentialsForm.module.scss';
import * as componentPrimaryBtnStyles from '../../components/primaryBtn/primaryBtn.module.scss';
import * as componentTextFieldStyles from '../../components/textField/textField.module.scss';

// 1 - generate context
const ctx = {
  templateStyles,
  moduleSignInStyles,
  componentPrimaryBtnStyles,
  componentTextFieldStyles
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));