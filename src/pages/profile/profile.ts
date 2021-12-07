// asssets import
import '../../assets/styles/index.scss'
import avatarLogo from '../../assets/images/avatar.svg'
import arrowLogo from '../../assets/images/arrow.svg'

// components import (.ts)
import SideNav from '../../templates/sideNav/sideNav'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PriamryBtn from '../../components/primaryBtn/primaryBtn'
import RoundBtn from '../../components/roundBtn/roundBtn'

const textFieldProps = [
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
]

const formProps = {
  title: 'Create Account',
  primaryLinkTo: '/signIn.html',
  primaryLinkLabel: 'Change password',
  secondaryLinkTo: '/signIn.html',
  secondaryLinkLabel: 'Log out',
  avatarLogo
}

const primaryBtnProps = {
  text: 'Submit',
  type: 'submit',
  classes: ['mt-6']
}

const roundBtnProps = {
  classes: ['rot-180'],
  logo: arrowLogo
}

// 2 - create page structure
const page = new SideNav({
  ctrlElement: new RoundBtn(roundBtnProps),
  content: null
  // content: new Form({
  //   ...formProps,
  //   childrenList: textFieldProps.map(p => new TextField(p)),
  //   submitBtn: new PriamryBtn(primaryBtnProps)
  // })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
