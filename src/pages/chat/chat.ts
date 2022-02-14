// asssets import
import '../../assets/styles/index.scss'
import textLogo from '../../assets/images/text.svg'
import sendLogo from '../../assets/images/send.svg'
import settingsLogo from '../../assets/images/settings.svg'
import searchLogo from '../../assets/images/search.svg'
import addLogo from '../../assets/images/add.svg'
import deleteLogo from '../../assets/images/delete.svg'
import personLogo from '../../assets/images/person.svg'
import userAddLogo from '../../assets/images/user_add.svg'
import userRemoveLogo from '../../assets/images/user_remove.svg'

// helpers import
import { chats, messages } from '../../helpers/fakeData'
import { clearInput, submitForm } from '../../helpers/formUtils'
import { showChatSettingsMenu, showModal } from '../../helpers/showComponents'

// components import (.ts)
import ChatLayout from '../../templates/chatLayout/chatLayout'
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatControls from '../../components/chat/chatControls/chatControls'
import ChatCard from '../../components/chat/chatCard/chatCard'
import ChatTitle from '../../components/chat/chatTitle/chatTitle'
import MessagesList from '../../components/chat/messagesList/messagesList'
import MessageCard from '../../components/chat/messageCard/messageCard'
import RoundBtn from '../../components/roundBtn/roundBtn'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import SecondaryBtn from '../../components/secondaryBtn/secondaryBtn'
import InputField from '../../components/chat/inputField/inputField'
import TextField from '../../components/textField/textField'
import Form from '../../modules/form/form'

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
  logo: addLogo,
  classes: ['w-full', 'h-full', 'pr-2']
}

const openProfileBtnIProps = {
  type: 'button',
  text: 'My profile',
  logo: personLogo,
  classes: ['w-full', 'h-full']
}

const chatTitleIProps = {
  chatName: 'Steve Jordan',
  chatAvatar: null,
  classes: ['ml-2']
}

const ctx = {
  childrenList: [
    new SecondaryBtn({
      type: 'button',
      text: 'Add user',
      logo: userAddLogo,
      classes: ['w-full', 'h-6', 'pr-22']
    }),
    new SecondaryBtn({
      type: 'button',
      text: 'Delete user',
      logo: userRemoveLogo,
      classes: ['w-full', 'h-6']
    }),
    new SecondaryBtn({
      type: 'button',
      text: 'Delete chat',
      logo: deleteLogo,
      classes: ['w-full', 'h-6', 'secondary-btn-red']
    })
  ]
}

// 2 - create page structure
const page = new ChatLayout({
  chatSearch: new ChatControls({
    isForm: false,
    classes: ['chat-controls-top'],
    childrenList: [new InputField(inputFieldSearchIProps)]
  }),
  chatsList: new ChatsList({
    childrenList: chats.map(chat => new ChatCard(chat))
  }),
  chatMenuCtrls: new ChatControls({
    isForm: false,
    classes: ['chat-controls-bottom'],
    childrenList: [
      new SecondaryBtn({
        ...addChatBtnIProps,
        events: {
          click: () => {
            showModal({
              content: new Form({
                title: 'Create Chat',
                avatar: null,
                childrenList: [
                  new TextField({
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
                    // events: {
                    //   focus: (event: Event): void => validateInput(event.target!),
                    //   blur: (event: Event): void => validateInput(event.target!)
                    // }
                  })
                ],
                submitBtn: new PrimaryBtn({
                  text: 'Sign Up',
                  type: 'submit',
                  classes: ['mt-6']
                  // events: {
                  //   click: () => validateForm()
                  // }
                })
              })
            })
          }
        }
      }),
      new SecondaryBtn(openProfileBtnIProps)
    ]
  }),
  chatHeader: new ChatControls({
    isForm: false,
    classes: ['chat-controls-top'],
    childrenList: [
      new ChatTitle(chatTitleIProps),
      new RoundBtn({
        ...chatSettingsBtnIProps,
        events: {
          click: () => {
            showChatSettingsMenu(ctx)
          }
        }
      })
    ]
  }),
  messagesList: new MessagesList({
    childrenList: messages.map(message => new MessageCard(message))
  }),
  messagesCtrls: new ChatControls({
    isForm: true,
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
