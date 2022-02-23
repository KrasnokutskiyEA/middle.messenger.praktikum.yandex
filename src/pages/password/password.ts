// asssets import
import '../../assets/styles/index.scss'
import arrowLogo from '../../assets/images/arrow.svg'

// helpers import
import { validateInput, validateForm, submitForm, validateNewPassword } from '../../helpers/formUtils'

// controllers import
import { authController } from '../../controllers/index'

// components import (.ts)
import SideNav from '../../templates/sideNav/sideNav'
import Form from '../../modules/form/form'
import TextField from '../../components/textField/textField'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import RoundBtn from '../../components/roundBtn/roundBtn'

// import Message from '../../components/message/message'

// 1 - generate context
const formIProps = {
  title: 'Change password'
}

const roundBtnIProps = {
  classes: ['rot-180'],
  logo: arrowLogo,
  type: 'button'
}

const textFieldIProps = [
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
      input: (event: Event): void => validateInput(event.target as HTMLInputElement)
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
      input: (event: Event): void => validateInput(event.target as HTMLInputElement)
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
      input: (event: Event): void => validateNewPassword(event.target as HTMLInputElement)
    }
  }
]

const primaryBtnIProps = {
  text: 'Submit',
  type: 'submit',
  id: 'submit-form-btn',
  classes: ['mt-2', 'mb-2'],
  disabled: false,
  events: {
    click: () => validateForm()
  }
}

// 2 - create page structure
const page = new SideNav({
  ctrlElement: new RoundBtn(roundBtnIProps),
  content: new Form({
    ...formIProps,
    childrenList: textFieldIProps.map(p => new TextField(p)),
    submitBtn: new PrimaryBtn(primaryBtnIProps),
    events: {
      submit: (event: Event) => {
        const data = submitForm(event)
        authController.changePassword({
          old_password: data.old_password,
          new_password: data.new_password,
          confirm_new_password: data.confirm_new_password
        })
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
