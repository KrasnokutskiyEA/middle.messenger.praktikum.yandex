// asssets import
import '../../assets/styles/index.scss'

// helpers import
import { chats, messages } from '../../helpers/fakeData'

// components import (.ts)
import ChatLayout from '../../templates/chatLayout/chatLayout'
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatCard from '../../components/chat/chatCard/chatCard'

// 1 - generate context
// const formProps = {
//   title: 'Sign In',
//   primaryLinkTo: '/createAccount.html',
//   primaryLinkLabel: 'Create account?'
// }

/*
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
*/

/*
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
*/

// 2 - create page structure
const page = new ChatLayout({
  // chatSearch:
  chatsList: new ChatsList({
    childrenList: chats.map(chat => new ChatCard(chat))
  })
  // chatMenuCtrls:
  // chatHeader:
  // chatMessagesList:
  // chatMessagesCtrls:
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
