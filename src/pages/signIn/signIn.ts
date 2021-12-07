// asssets import
import '../../assets/styles/index.scss'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PriamryBtn from '../../components/primaryBtn/primaryBtn'

// 1 - generate context
const formProps = {
  title: 'Sign In',
  primaryLinkTo: '/createAccount.html',
  primaryLinkLabel: 'Create account?'
}

const textFieldProps = [
  {
    label: 'Username',
    type: 'text',
    name: 'login',
    id: 'login',
    placeholder: 'Username',
    required: 'required'
  },
  {
    label: 'Password',
    type: 'text',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    required: 'required'
  }
]

const primaryBtnProps = {
  text: 'Sign In',
  type: 'submit',
  classes: ['mt-auto'],
  events: {
    click: (event: any) => console.log('OLD 0 EVENT=', event)
  }
}

// 2 - create page structure
const page = new CenterContent({
  content: new Form({
    ...formProps,
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
