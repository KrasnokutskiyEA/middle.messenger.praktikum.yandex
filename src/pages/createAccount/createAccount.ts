// asssets import
import '../../assets/styles/index.scss'

// helpers import
import { validateInput, validateForm, submitForm } from '../../helpers/validate'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'

// 1 - generate context
const formProps = {
  title: 'Create Account',
  primaryLinkTo: '/signIn.html',
  primaryLinkLabel: 'Sign in'
}

const textFieldProps = [
  {
    label: 'Email',
    type: 'text',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    required: 'required',
    pattern: '^[A-Za-z0-9_\\/^#&+-]+@[A-Za-z0-9_\\/^#&+-]+\\.+[A-Za-z]+$',
    errorText: 'latin, may include special chars, @ required',
    events: {
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
    }
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
    errorText: '3-20 latin symbols, no spaces, no special chars',
    events: {
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
    }
  },
  {
    label: 'First Name',
    type: 'text',
    name: 'first_name',
    id: 'first_name',
    placeholder: 'First Name',
    required: 'required',
    pattern: '^[A-Z][a-z-]*$|^[А-я][а-я-]*$',
    errorText: 'latin/cyrillic, capital 1st char, no spaces/numbers/spec chars',
    events: {
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
    }
  },
  {
    label: 'Last Name',
    type: 'text',
    name: 'second_name',
    id: 'second_name',
    placeholder: 'Last Name',
    required: 'required',
    pattern: '^[A-Z][a-z-]*$|^[А-я][а-я-]*$',
    errorText: 'latin/cyrillic, capital 1st char, no spaces/numbers/spec chars',
    events: {
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
    }
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
    errorText: '10-15 numbers, may start with +',
    events: {
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
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
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
    }
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
    errorText: '8-40 symbols, at least one capital letter and number',
    events: {
      focus: (event: Event): void => validateInput(event.target!),
      blur: (event: Event): void => validateInput(event.target!)
    }
  }
]

const primaryBtnProps = {
  text: 'Sign Up',
  type: 'submit',
  classes: ['mt-6'],
  events: {
    click: () => validateForm()
  }
}

// 2 - create page structure
const page = new CenterContent({
  content: new Form({
    ...formProps,
    childrenList: textFieldProps.map(p => new TextField(p)),
    submitBtn: new PrimaryBtn(primaryBtnProps),
    events: {
      submit: (event: Event) => submitForm(event)
    }
  })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
