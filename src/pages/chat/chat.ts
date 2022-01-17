// asssets import
import '../../assets/styles/index.scss'
import arrowLogo from '../../assets/images/arrow.svg'

// helpers import
import { chats, messages } from '../../helpers/fakeData'
import { clearInput, submitForm } from '../../helpers/validate'

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
const inputFieldIProps = {
  name: 'message',
  id: 'message',
  placeholder: 'Message',
  required: true,
  classes: ['ml-2']
}

const roundBtnIProps = {
  logo: arrowLogo,
  classes: ['ml-2', 'mr-2'],
  type: 'submit'
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
    inputField: new InputField(inputFieldIProps),
    sendBtn: new RoundBtn(roundBtnIProps),
    events: {
      submit: (event: Event) => {
        submitForm(event)
        clearInput(event)
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
