import arrowLogo from '../../assets/images/arrow.svg'

// helpers import
import { validateInput, validateForm, submitForm, validateNewPassword } from '../../helpers/formUtils'

// controllers import
import { userController } from '../../controllers/index'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/sideNav/sideNav.pug'

// components import (.ts)
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import RoundBtn from '../../components/roundBtn/roundBtn'
import router from '../../router'

// 1 - generate context
const ctx = {
  main: {
    title: 'Change password'
  },
  inputs: [
    {
      label: 'Old password',
      type: 'password',
      name: 'old_password',
      id: 'old_password',
      placeholder: 'Old password',
      required: 'required',
      pattern: '^(?:(?=.*\\d)(?=.*[A-Z]).*)$',
      maxlength: 20,
      minlength: 3,
      errorText: '8-40 symbols, at least one capital letter and number',
      events: {
        input: (event: Event): void => {
          validateInput(event.target as HTMLInputElement)
        }
      }
    },
    {
      label: 'New password',
      type: 'password',
      name: 'new_password',
      id: 'new_password',
      placeholder: 'New password',
      required: 'required',
      pattern: '^(?:(?=.*\\d)(?=.*[A-Z]).*)$',
      maxlength: 40,
      minlength: 8,
      errorText: '8-40 symbols, at least one capital letter and number',
      events: {
        input: (event: Event): void => {
          validateInput(event.target as HTMLInputElement)
        }
      }
    },
    {
      label: 'Confirm new password',
      type: 'password',
      name: 'confirm_new_password',
      id: 'confirm_new_password',
      placeholder: 'Confirm new password',
      required: 'required',
      maxlength: 40,
      minlength: 8,
      errorText: 'Passwords do not match',
      events: {
        input: (event: Event): void => {
          validateNewPassword(event.target as HTMLInputElement)
        }
      }
    }
  ],
  submitBtn: {
    text: 'Submit',
    type: 'submit',
    id: 'submit-form-btn',
    classes: ['mt-2', 'mb-2'],
    disabled: false
  },
  goBackBtn: {
    classes: ['rot-180', 'round-btn-normal'],
    logo: arrowLogo,
    type: 'button'
  }
}

// 2 - create page structure
const page = {
  ctrlElement: new RoundBtn({
    ...ctx.goBackBtn,

    events: {
      click: () => {
        router.back()
      }
    }
  }),

  content: new Form({
    ...ctx.main,

    childrenList: ctx.inputs.map(input => new TextField(input)),

    submitBtn: new PrimaryBtn({
      ...ctx.submitBtn,

      events: {
        click: () => {
          validateForm()
        }
      }
    }),

    events: {
      submit: async (event: Event): Promise<void> => {
        const data = submitForm(event)
        await userController.changePassword({
          oldPassword: data.old_password,
          newPassword: data.new_password
        })
      }
    }
  })
}

// 3 - component
export default class PageChangePassword extends Block {
  constructor () {
    super('div', page)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
