// asssets import
import '../../assets/styles/index.scss'
import textLogo from '../../assets/images/text.svg'
import sendLogo from '../../assets/images/send.svg'
import searchLogo from '../../assets/images/search.svg'

// helpers import
import { chats, messages } from '../../helpers/fakeData'
import { clearInput, submitForm } from '../../helpers/formUtils'

// components import (.ts)
import ChatLayout from '../../templates/chatLayout/chatLayout'
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatSearch from '../../components/chat/chatSearch/chatSearch'
import ChatCard from '../../components/chat/chatCard/chatCard'
import MessagesList from '../../components/chat/messagesList/messagesList'
import MessageCard from '../../components/chat/messageCard/messageCard'
import MessagesCtrls from '../../components/chat/messagesCtrls/messagesCtrls'
import RoundBtn from '../../components/roundBtn/roundBtn'
import InputField from '../../components/chat/inputField/inputField'

// 1 - generate context
const inputFieldMessageIProps = {
  name: 'message',
  id: 'message',
  placeholder: 'Write a message...',
  required: true,
  type: 'text',
  classes: ['ml-2'],
  logo: textLogo
}

const inputFieldSearchIProps = {
  name: 'search',
  id: 'search',
  placeholder: 'Search...',
  required: false,
  type: 'search',
  classes: ['ml-2', 'mr-2'],
  logo: searchLogo
}

const roundBtnIProps = {
  logo: sendLogo,
  classes: ['ml-2', 'mr-2'],
  type: 'submit'
}

// 2 - create page structure
const page = new ChatLayout({
  chatSearch: new ChatSearch({
    inputField: new InputField(inputFieldSearchIProps)
  }),
  chatsList: new ChatsList({
    childrenList: chats.map(chat => new ChatCard(chat))
  }),
  // chatMenuCtrls:
  // chatHeader:
  messagesList: new MessagesList({
    childrenList: messages.map(message => new MessageCard(message))
  }),
  messagesCtrls: new MessagesCtrls({
    inputField: new InputField(inputFieldMessageIProps),
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
