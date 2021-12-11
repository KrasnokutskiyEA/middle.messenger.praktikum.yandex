// asssets import
import '../../assets/styles/index.scss'

// helpers import
import { chats, messages } from '../../helpers/fakeData'

// components import (.ts)
import ChatLayout from '../../templates/chatLayout/chatLayout'
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatCard from '../../components/chat/chatCard/chatCard'

// 1 - generate context
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
