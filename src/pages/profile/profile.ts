// asssets import
import '../../assets/styles/index.scss'
import avatarLogo from '../../assets/images/avatar.svg'
import arrowLogo from '../../assets/images/arrow.svg'

// helpers import
import { validateInput, validateForm, submitForm } from '../../helpers/formUtils'

// components import (.ts)
import SideNav from '../../templates/sideNav/sideNav'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import RoundBtn from '../../components/roundBtn/roundBtn'
import Avatar from '../../components/avatar/avatar'

const textFieldIProps = [
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
    label: 'Nickname',
    type: 'text',
    name: 'display_name',
    id: 'display_name',
    placeholder: 'Nickname',
    required: 'required',
    maxlength: 10,
    minlength: 3,
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
  }
]

const formIProps = {
  primaryLinkTo: '/signIn.html',
  primaryLinkLabel: 'Change password',
  secondaryLinkTo: '/signIn.html',
  secondaryLinkLabel: 'Log out'
}

const primaryBtnIProps = {
  text: 'Submit',
  type: 'submit',
  classes: ['mt-2'],
  events: {
    click: () => validateForm()
  }
}

const roundBtnIProps = {
  classes: ['rot-180'],
  logo: arrowLogo,
  type: 'button'
}

const avatarIProps = {
  classes: ['mb-4'],
  logo: avatarLogo
}

// 2 - create page structure
const page = new SideNav({
  ctrlElement: new RoundBtn(roundBtnIProps),
  content: new Form({
    ...formIProps,
    avatar: new Avatar(avatarIProps),
    childrenList: textFieldIProps.map(p => new TextField(p)),
    submitBtn: new PrimaryBtn(primaryBtnIProps),
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
