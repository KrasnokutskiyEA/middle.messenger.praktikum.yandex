// asssets import
import '../../assets/styles/index.scss'
import arrowLogo from '../../assets/images/arrow.svg'

// helpers import
import { chats, messages } from '../../helpers/fakeData'

// components import (.ts)
import ChatLayout from '../../templates/chatLayout/chatLayout'
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatCard from '../../components/chat/chatCard/chatCard'
import MessagesList from '../../components/chat/messagesList/messagesList'
import MessageCard from '../../components/chat/messageCard/messageCard'
import MessagesCtrls from '../../components/chat/messagesCtrls/messagesCtrls'
import RoundBtn from '../../components/roundBtn/roundBtn'
import InputField from '../../components/chat/inputField/inputField'

// 1 - generate context
const inputFieldProps = {
  name: 'message',
  id: 'message',
  placeholder: 'Message',
  minlength: 1,
  classes: ['ml-2']
}

const roundBtnProps = {
  logo: arrowLogo,
  classes: ['ml-2', 'mr-2']
}

// 2 - create page structure
const page = new ChatLayout({
  // chatSearch:
  chatsList: new ChatsList({
    childrenList: chats.map(chat => new ChatCard(chat))
  }),
  // chatMenuCtrls:
  // chatHeader:
  messagesList: new MessagesList({
    childrenList: messages.map(message => new MessageCard(message))
  }),
  messagesCtrls: new MessagesCtrls({
    inputField: new InputField(inputFieldProps),
    sendBtn: new RoundBtn(roundBtnProps)
  })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
