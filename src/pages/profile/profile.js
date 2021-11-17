import compileTemplate from './profile.pug';
import avatarLogo from '../../assets/images/avatar.svg'

// parent and children styles
import '../../assets/styles/global.scss';
import * as templateStyles from  '../../templates/centerChildren/centerChildren.module.scss';
import * as templateSideNavStyles from  '../../templates/sideNav/sideNav.module.scss';
import * as moduleSignInStyles from '../../modules/credentialsForm/credentialsForm.module.scss';
import * as componentPrimaryBtnStyles from '../../components/primaryBtn/primaryBtn.module.scss';
import * as componentTextFieldStyles from '../../components/textField/textField.module.scss';
import * as componentAvatarStyles from '../../components/avatar/avatar.module.scss';

// 1 - generate context
const ctx = {
  templateStyles,
  templateSideNavStyles,
  moduleSignInStyles,
  componentPrimaryBtnStyles,
  componentTextFieldStyles,
  componentAvatarStyles,
  avatarLogo
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));