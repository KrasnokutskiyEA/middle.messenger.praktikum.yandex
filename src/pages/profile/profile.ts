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
import Avatar from '../../components/avatar/avatar'

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
  primaryLinkTo: '/signIn.html',
  primaryLinkLabel: 'Change password',
  secondaryLinkTo: '/signIn.html',
  secondaryLinkLabel: 'Log out'
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

const avatarProps = {
  classes: ['mb-4'],
  logo: avatarLogo
}

// 2 - create page structure
const page = new SideNav({
  ctrlElement: new RoundBtn(roundBtnProps),
  content: new Form({
    ...formProps,
    avatar: new Avatar(avatarProps),
    childrenList: textFieldProps.map(p => new TextField(p)),
    submitBtn: new PriamryBtn(primaryBtnProps)
  })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
