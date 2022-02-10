// asssets import
import '../../assets/styles/index.scss'
import textLogo from '../../assets/images/text.svg'
import sendLogo from '../../assets/images/send.svg'
import settingsLogo from '../../assets/images/settings.svg'
import searchLogo from '../../assets/images/search.svg'
import addLogo from '../../assets/images/add.svg'
import personLogo from '../../assets/images/person.svg'

// helpers import
import { chats, messages } from '../../helpers/fakeData'
import { clearInput, submitForm } from '../../helpers/formUtils'
import { showChatSettingsMenu } from '../../helpers/infoMessage'

// components import (.ts)
import ChatLayout from '../../templates/chatLayout/chatLayout'
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatControls from '../../components/chat/chatControls/chatControls'
import ChatCard from '../../components/chat/chatCard/chatCard'
import ChatTitle from '../../components/chat/chatTitle/chatTitle'
import MessagesList from '../../components/chat/messagesList/messagesList'
import MessageCard from '../../components/chat/messageCard/messageCard'
import RoundBtn from '../../components/roundBtn/roundBtn'
import SecondaryBtn from '../../components/secondaryBtn/secondaryBtn'
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

const sendMessageBtnIProps = {
  logo: sendLogo,
  classes: ['round-btn-normal', 'ml-2', 'mr-2'],
  type: 'submit'
}

const chatSettingsBtnIProps = {
  logo: settingsLogo,
  classes: ['round-btn-icon', 'ml-2', 'mr-2'],
  type: 'button'
}

const addChatBtnIProps = {
  type: 'button',
  text: 'New chat',
  isRed: false,
  logo: addLogo
}

const openProfileBtnIProps = {
  type: 'button',
  text: 'My profile',
  isRed: false,
  logo: personLogo
}

const chatTitleIProps = {
  chatName: 'Steve Jordan',
  chatAvatar: null,
  classes: ['ml-2']
}

// 2 - create page structure
const page = new ChatLayout({
  chatSearch: new ChatControls({
    classes: ['chat-controls-top'],
    childrenList: [new InputField(inputFieldSearchIProps)]
  }),
  chatsList: new ChatsList({
    childrenList: chats.map(chat => new ChatCard(chat))
  }),
  chatMenuCtrls: new ChatControls({
    classes: ['chat-controls-bottom'],
    childrenList: [
      new SecondaryBtn(addChatBtnIProps),
      new SecondaryBtn(openProfileBtnIProps)
    ]
  }),
  chatHeader: new ChatControls({
    classes: ['chat-controls-top'],
    childrenList: [
      new ChatTitle(chatTitleIProps),
      new RoundBtn({
        ...chatSettingsBtnIProps,
        events: {
          click: () => {
            showChatSettingsMenu()
          }
        }
      })
    ]
  }),
  messagesList: new MessagesList({
    childrenList: messages.map(message => new MessageCard(message))
  }),
  messagesCtrls: new ChatControls({
    classes: ['chat-controls-bottom'],
    childrenList: [
      new InputField(inputFieldMessageIProps),
      new RoundBtn(sendMessageBtnIProps)
    ],
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
