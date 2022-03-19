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
import { validateInput, clearInput, submitForm } from '../../helpers/formUtils'
import { showChatSettingsMenu, hideChatSettingsMenu, showModal } from '../../helpers/showComponents'

// controllers import
import { chatController } from '../../controllers/index'

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

// 0 - generate common context
const ctxCommon = {
  /* modal windows stuff */
  userInput: {
    label: 'User name',
    type: 'text',
    name: 'user_name',
    id: 'user_name',
    placeholder: 'User name',
    required: 'required',
    pattern: '^\\d*[a-zA-Z][a-zA-Z0-9]*$',
    maxlength: 20,
    minlength: 3,
    errorText: '3-20 latin symbols, no spaces, no special chars'
  },
  submintBtn: {
    text: 'Submit',
    type: 'submit',
    classes: ['mb-2', 'mt-2']
  }
}

// 1 - generate context
const ctx = {
  /* top search section */
  chatSearch: {
    main: {
      isForm: false,
      classes: ['chat-controls-top']
    },
    input: {
      name: 'search',
      id: 'search',
      placeholder: 'Search...',
      required: false,
      type: 'search',
      classes: ['ml-2', 'mr-2'],
      logo: searchLogo
    }
  },

  /* bottom chat menu section */
  chatMenu: {
    main: {
      isForm: false,
      classes: ['chat-controls-bottom']
    },
    newChatBtn: {
      type: 'button',
      text: 'New chat',
      logo: addLogo,
      classes: ['w-full', 'h-full', 'pr-2']
    },
    myProfileBtn: {
      type: 'button',
      text: 'My profile',
      logo: personLogo,
      classes: ['w-full', 'h-full']
    }
  },

  /* top header section */
  chatHeader: {
    main: {
      isForm: false,
      classes: ['chat-controls-top']
    },
    title: {
      chatName: 'Steve Jordan',
      chatAvatar: null,
      classes: ['ml-2']
    },
    settingsBtn: {
      logo: settingsLogo,
      classes: ['round-btn-icon', 'ml-2', 'mr-2'],
      type: 'button'
    },
    addUserBtn: {
      type: 'button',
      text: 'Add user',
      logo: userAddLogo,
      classes: ['w-full', 'h-6', 'pr-34']
    },
    removeUserBtn: {
      type: 'button',
      text: 'Remove user',
      logo: userRemoveLogo,
      classes: ['w-full', 'h-6']
    },
    deleteChatBtn: {
      type: 'button',
      text: 'Delete chat',
      logo: deleteLogo,
      classes: ['w-full', 'h-6', 'secondary-btn-red', 'pr-24']
    }
  },

  /* bottom message form section */
  messageForm: {
    main: {
      isForm: true,
      classes: ['chat-controls-bottom']
    },
    input: {
      name: 'message',
      id: 'message',
      placeholder: 'Write a message...',
      required: true,
      type: 'text',
      classes: ['ml-2'],
      logo: textLogo
    },
    sendBtn: {
      logo: sendLogo,
      classes: ['round-btn-normal', 'ml-2', 'mr-2'],
      type: 'submit'
    }
  },

  /* modal window properties */
  modal: {
    newChat: {
      main: {
        title: 'Create Chat',
        avatar: null
      },
      input: {
        label: 'Chat name',
        type: 'text',
        name: 'chat_name',
        id: 'chat_name',
        placeholder: 'Chat name',
        required: 'required',
        pattern: '^\\d*[a-zA-Z][a-zA-Z0-9]*$',
        maxlength: 20,
        minlength: 3,
        errorText: '3-20 latin symbols, no spaces, no special chars'
      }
    },
    addUser: {
      main: {
        title: 'Add user',
        avatar: null
      },
      input: ctxCommon.userInput
    },
    removeUser: {
      main: {
        title: 'Remove user',
        avatar: null
      },
      input: ctxCommon.userInput
    }
  }
}

/* modal window generator */
const generateModal = (mainProps: {}, inputProps: {}, submitAction: {}): { content: Form } => {
  return {
    content: new Form({
      ...mainProps,

      childrenList: [
        new TextField({
          ...inputProps,

          events: {
            focus: (event: Event): void => validateInput(event.target as HTMLInputElement),
            blur: (event: Event): void => validateInput(event.target as HTMLInputElement)
          }
        })
      ],

      submitBtn: new PrimaryBtn(ctxCommon.submintBtn),
      events: submitAction
    })
  }
}

/* chat settings menu */
const chatSettingsMenu = {
  childrenList: [
    new SecondaryBtn({
      ...ctx.chatHeader.addUserBtn,

      events: {
        click: () => {
          showModal(
            generateModal(
              ctx.modal.addUser.main,
              ctx.modal.addUser.input,
              {
                submit: (event: Event) => {
                  const data = submitForm(event)
                  chatController.addUserToChat({ chat: data.user_name })
                }
              }
            )
          )

          hideChatSettingsMenu()
        }
      }
    }),
    new SecondaryBtn({
      ...ctx.chatHeader.removeUserBtn,

      events: {
        click: () => {
          showModal(
            generateModal(
              ctx.modal.removeUser.main,
              ctx.modal.removeUser.input,
              {
                submit: (event: Event) => {
                  const data = submitForm(event)
                  chatController.removeUserFromChat({ chat: data.user_name })
                }
              }
            )
          )

          hideChatSettingsMenu()
        }
      }
    }),
    new SecondaryBtn({
      ...ctx.chatHeader.deleteChatBtn,

      events: {
        click: () => {
          console.log('delete chat')
        }
      }
    })
  ]
}

// 2 - create page structure
const page = new ChatLayout({
  chatSearch: new ChatControls({
    ...ctx.chatSearch.main,

    childrenList: [
      new InputField(ctx.chatSearch.input)
    ]
  }),

  chatsList: new ChatsList({
    childrenList: chats.map(chat => new ChatCard({
      ...chat,

      events: {
        click: () => {
          console.log('chat=', chat)
        }
      }
    }))
  }),

  chatMenuCtrls: new ChatControls({
    ...ctx.chatMenu.main,

    childrenList: [
      new SecondaryBtn({
        ...ctx.chatMenu.newChatBtn,

        events: {
          click: () => {
            showModal(
              generateModal(
                ctx.modal.newChat.main,
                ctx.modal.newChat.input,
                {
                  submit: (event: Event) => {
                    const data = submitForm(event)
                    chatController.createChat({ chat: data.chat_name })
                  }
                }
              )
            )
          }
        }
      }),
      new SecondaryBtn({
        ...ctx.chatMenu.myProfileBtn,

        events: {
          click: () => {
            console.log('goto my profile')
          }
        }
      })
    ]
  }),

  chatHeader: new ChatControls({
    ...ctx.chatHeader.main,

    childrenList: [
      new ChatTitle(ctx.chatHeader.title),
      new RoundBtn({
        ...ctx.chatHeader.settingsBtn,

        events: {
          click: () => {
            showChatSettingsMenu(chatSettingsMenu)
          }
        }
      })
    ]
  }),

  messagesList: new MessagesList({
    childrenList: messages.map(message => new MessageCard(message))
  }),

  messagesCtrls: new ChatControls({
    ...ctx.messageForm.main,

    childrenList: [
      new InputField(ctx.messageForm.input),
      new RoundBtn(ctx.messageForm.sendBtn)
    ],

    events: {
      submit: (event: Event) => {
        submitForm(event)
        clearInput(event.target as HTMLInputElement)
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
