// asssets import
import '../../assets/styles/index.scss'

// helpers import
import { validateInput, validateForm, submitForm } from '../../helpers/formUtils'

// controllers import
import { authController } from '../../controllers/index'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'

// 1 - generate context
const ctx = {
  main: {
    title: 'Sign In',
    primaryLinkTo: '/createAccount.html',
    primaryLinkLabel: 'Create account?'
  },
  inputs: [
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
      errorText: '3-20 latin symbols, no spaces, no special chars'
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
      errorText: '8-40 symbols, at least one capital letter and number'
    }
  ],
  submitBtn: {
    text: 'Sign In',
    type: 'submit',
    id: 'submit-form-btn',
    classes: ['mt-2'],
    disabled: false
  }
}

// 2 - create page structure
const page = new CenterContent({
  content: new Form({
    ...ctx.main,

    childrenList: ctx.inputs.map(input => new TextField({
      ...input,

      events: {
        focus: (event: Event): void => validateInput(event.target as HTMLInputElement),
        blur: (event: Event): void => validateInput(event.target as HTMLInputElement)
      }
    })),

    submitBtn: new PrimaryBtn({
      ...ctx.submitBtn,

      events: {
        click: () => validateForm()
      }
    }),

    events: {
      submit: (event: Event) => {
        const data = submitForm(event)
        authController.signIn({ login: data.login, password: data.password })
      }
    }
  })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
