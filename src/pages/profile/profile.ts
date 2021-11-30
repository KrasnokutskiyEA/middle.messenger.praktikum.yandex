import compileTemplate from './profile.pug'
import avatarLogo from '../../assets/images/avatar.svg'
import arrowLogo from '../../assets/images/arrow.svg'

// styles
import '../../assets/styles/index.scss'

// 1 - generate context
const ctx = {
  parameters: {
    title: 'Create Account',
    linkPasswordTo: '/signIn.html',
    linkPasswordLabel: 'Change password',
    linkLogoutTo: '/signIn.html',
    linkLogoutLabel: 'Log out'
  },
  textFieldParameters: [
    {
      label: 'Email',
      type: 'text',
      name: 'email',
      id: 'email',
      placeholder: 'Email',
      required: 'required'
    },
    {
      label: 'Username',
      type: 'text',
      name: 'login',
      id: 'login',
      placeholder: 'Username',
      required: 'required'
    },
    {
      label: 'First Name',
      type: 'text',
      name: 'first_name',
      id: 'first_name',
      placeholder: 'First Name',
      required: 'required'
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'second_name',
      id: 'second_name',
      placeholder: 'Last Name',
      required: 'required'
    },
    {
      label: 'Nickname',
      type: 'text',
      name: 'display_name',
      id: 'display_name',
      placeholder: 'Nickname',
      required: 'required'
    },
    {
      label: 'Phone',
      type: 'text',
      name: 'phone',
      id: 'phone',
      placeholder: 'Phone',
      required: 'required'
    }
  ],
  primaryBtnParameters: {
    text: 'Submit',
    type: 'submit',
    classes: ['mt-6']
  },
  avatarParameters: {
    classes: ['mb-4']
  },
  roundBtnParameters: {
    classes: ['rot-180']
  },
  avatarLogo,
  arrowLogo
}

// 2 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.insertAdjacentHTML('afterbegin', compileTemplate(ctx))
}
