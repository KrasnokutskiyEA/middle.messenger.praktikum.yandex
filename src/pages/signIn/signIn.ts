// asssets import
import '../../assets/styles/index.scss'

// helpers import
import { validateInput, validateForm } from '../../helpers/validate'

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
    required: 'required',
    pattern: '^\\d*[a-zA-Z][a-zA-Z0-9]*$',
    maxlength: 20,
    minlength: 3,
    errorText: '3-20 latin symbols, no spaces, no special chars',
    events: {
      focus: (event: any): void => validateInput(event.target),
      blur: (event: any): void => validateInput(event.target)
    }
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    required: 'required',
    pattern: '^(?:(?=.*\\d)(?=.*[A-Z]).*)$',
    maxlength: 40,
    minlength: 8,
    errorText: '8-40 symbols, at least one capital letter and number',
    events: {
      focus: (event: any): void => validateInput(event.target),
      blur: (event: any): void => validateInput(event.target)
    }
  }
]

const primaryBtnProps = {
  text: 'Sign In',
  type: 'submit',
  id: 'submit-form-btn',
  classes: ['mt-auto'],
  disabled: false,
  events: {
    click: () => validateForm()
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
