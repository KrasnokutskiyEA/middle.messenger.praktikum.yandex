// helpers import
import { validateInput, validateForm, submitForm } from '../../helpers/formUtils'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/centerContent/centerContent.pug'

// components import (.ts)
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'

// 1 - generate context
const ctx = {
  main: {
    title: 'Create Account',
    primaryLinkTo: '/signIn.html',
    primaryLinkLabel: 'Sign in'
  },
  inputs: [
    {
      label: 'Email',
      type: 'text',
      name: 'email',
      id: 'email',
      placeholder: 'Email',
      required: 'required',
      pattern: '^[A-Za-z0-9_\\/^#&+-]+@[A-Za-z0-9_\\/^#&+-]+\\.+[A-Za-z]+$',
      errorText: 'latin, may include special chars, @ required'
    },
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
      label: 'First Name',
      type: 'text',
      name: 'first_name',
      id: 'first_name',
      placeholder: 'First Name',
      required: 'required',
      pattern: '^[A-Z][a-z-]*$|^[А-я][а-я-]*$',
      errorText: 'latin/cyrillic, capital 1st char, no spaces/numbers/spec chars'
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'second_name',
      id: 'second_name',
      placeholder: 'Last Name',
      required: 'required',
      pattern: '^[A-Z][a-z-]*$|^[А-я][а-я-]*$',
      errorText: 'latin/cyrillic, capital 1st char, no spaces/numbers/spec chars'
    },
    {
      label: 'Phone',
      type: 'text',
      name: 'phone',
      id: 'phone',
      placeholder: 'Phone',
      required: 'required',
      maxlength: 15,
      minlength: 10,
      pattern: '^[+]?[0-9]*$',
      errorText: '10-15 numbers, may start with +'
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
    },
    {
      label: 'Confirm password',
      type: 'password',
      name: 'confirm_password',
      id: 'confirm_password',
      placeholder: 'Confirm password',
      required: 'required',
      pattern: '^(?:(?=.*\\d)(?=.*[A-Z]).*)$',
      maxlength: 40,
      minlength: 8,
      errorText: '8-40 symbols, at least one capital letter and number'
    }
  ],
  submitBtn: {
    text: 'Sign Up',
    type: 'submit',
    classes: ['mt-2']
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

    events: {
      submit: (event: Event) => submitForm(event)
    }
  })
}

// 3 - component
export default class PageCreateAccount extends Block {
  constructor () {
    super('div', page)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
