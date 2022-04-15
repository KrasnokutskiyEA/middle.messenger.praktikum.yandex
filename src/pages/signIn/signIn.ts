// helpers import
import { validateInput, validateForm, submitForm } from '../../helpers/formUtils'

// controllers import
import { authController } from '../../controllers/index'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/centerContent/centerContent.pug'

// components import (.ts)
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import Link from '../../components/link/link'
import router from '../../router'

// 1 - generate context
const ctx = {
  main: {
    title: 'Sign In'
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
  },
  linkPrimary: {
    to: '/create-account',
    label: 'Create account?'
  }
}

// 2 - create page structure
const page = {
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

    linkPrimary: new Link({
      ...ctx.linkPrimary,

      events: {
        click: (event: Event) => {
          event.preventDefault()
          router.go(ctx.linkPrimary.to)
        }
      }
    }),

    events: {
      submit: (event: Event) => {
        const data = submitForm(event)
        authController.signIn({ login: data.login, password: data.password })
      }
    }
  })
}

// 3 - component
export default class PageSignIn extends Block {
  constructor () {
    super('div', page)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
