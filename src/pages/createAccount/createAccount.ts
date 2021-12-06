// asssets import
import '../../assets/styles/index.scss'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PriamryBtn from '../../components/primaryBtn/primaryBtn'

// 1 - generate context
const formProps = {
  title: 'Create Account',
  linkTo: '/signIn.html',
  linkMessage: 'Sign in'
}

const textFieldProps = [
  new TextField({
    label: 'Email',
    type: 'text',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    required: 'required'
  }),
  new TextField({
    label: 'Username',
    type: 'text',
    name: 'login',
    id: 'login',
    placeholder: 'Username',
    required: 'required'
  }),
  new TextField({
    label: 'First Name',
    type: 'text',
    name: 'first_name',
    id: 'first_name',
    placeholder: 'First Name',
    required: 'required'
  }),
  new TextField({
    label: 'Last Name',
    type: 'text',
    name: 'second_name',
    id: 'second_name',
    placeholder: 'Last Name',
    required: 'required'
  }),
  new TextField({
    label: 'Phone',
    type: 'text',
    name: 'phone',
    id: 'phone',
    placeholder: 'Phone',
    required: 'required'
  }),
  new TextField({
    label: 'Password',
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    required: 'required'
  }),
  new TextField({
    label: 'Confirm password',
    type: 'password',
    name: 'confirm_password',
    id: 'confirm_password',
    placeholder: 'Confirm password',
    required: 'required'
  })
]

const primaryBtnProps = {
  text: 'Sign Up',
  type: 'submit',
  classes: ['mt-6']
}

// 2 - create page structure
const page = new CenterContent({
  content: new Form({
    ...formProps,
    chldList: textFieldProps[0],
    submitBtn: new PriamryBtn(primaryBtnProps)
  })
})

// const page = new Form({
//   ...formProps,
//   childrenList: textFieldProps,
//   submitBtn: new PriamryBtn(primaryBtnProps)
// })

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.getContent())
}
