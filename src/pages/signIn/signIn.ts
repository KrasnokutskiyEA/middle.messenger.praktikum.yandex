// asssets import
import '../../assets/styles/index.scss'

import validate from '../../helpers/validate'

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
    pattern: '[\\w.]*',
    maxlength: 20,
    minlength: 3,
    events: {
      focus: (event: any): void => validate(event, validationTarget),
      blur: (event: any): void => validate(event, validationTarget)
    }
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    required: 'required',
    pattern: '[-+~!?@#$%^&*;\\()\\[\\]\\|:\\w]*',
    maxlength: 40,
    minlength: 8,
    events: {
      focus: (event: any): void => validate(event, validationTarget),
      blur: (event: any): void => validate(event, validationTarget)
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

// 4 - form validation target
const validationTarget = page.children.content.children.submitBtn
