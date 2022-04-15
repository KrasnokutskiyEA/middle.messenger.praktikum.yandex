// asssets import
import avatarLogo from '../../assets/images/avatar.svg'
import arrowLogo from '../../assets/images/arrow.svg'

// helpers import
import { validateInput, validateForm, submitForm } from '../../helpers/formUtils'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/sideNav/sideNav.pug'

// components import (.ts)
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import RoundBtn from '../../components/roundBtn/roundBtn'
import Avatar from '../../components/avatar/avatar'
import Link from '../../components/link/link'
import router from '../../router'

// 1 - generate context
const ctx = {
  avatar: {
    classes: ['mb-4'],
    logo: avatarLogo
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
      label: 'Nickname',
      type: 'text',
      name: 'display_name',
      id: 'display_name',
      placeholder: 'Nickname',
      required: 'required',
      maxlength: 10,
      minlength: 3,
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
    }
  ],
  submitBtn: {
    text: 'Submit',
    type: 'submit',
    classes: ['mt-2']
  },
  linkPrimary: {
    to: '/change-password',
    label: 'Change password'
  },
  linkSecondary: {
    to: '/sign-in',
    label: 'Log out'
  },
  goBackBtn: {
    classes: ['rot-180', 'round-btn-normal'],
    logo: arrowLogo,
    type: 'button'
  }
}

// 2 - create page structure
const page = {
  ctrlElement: new RoundBtn(ctx.goBackBtn),

  content: new Form({
    avatar: new Avatar(ctx.avatar),

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

    linkSecondary: new Link({
      ...ctx.linkSecondary,

      events: {
        click: (event: Event) => {
          event.preventDefault()
          router.go(ctx.linkSecondary.to)
        }
      }
    }),

    events: {
      submit: (event: Event) => submitForm(event)
    }
  })
}

// 3 - component
export default class PageUserProfile extends Block {
  constructor () {
    super('div', page)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
