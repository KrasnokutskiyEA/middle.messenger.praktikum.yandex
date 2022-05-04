// asssets import
import textLogo from '../../assets/images/text.svg'
import sendLogo from '../../assets/images/send.svg'
import settingsLogo from '../../assets/images/settings.svg'
import searchLogo from '../../assets/images/search.svg'
import addLogo from '../../assets/images/add.svg'
import deleteLogo from '../../assets/images/delete.svg'
import personLogo from '../../assets/images/person.svg'
import userAddLogo from '../../assets/images/user_add.svg'
import userRemoveLogo from '../../assets/images/user_remove.svg'

// classes import
import { Block, IProps } from '../../classes/Block'
import { TState } from '../../classes/Store'

// template import
import template from '../../templates/chatLayout/chatLayout.pug'

// helpers import
import { formatChats, formatMessages, initSelectedChat } from '../../helpers/chatUtils'
import { validateInput, clearInput, submitForm, findChat, findChatById } from '../../helpers/formUtils'
import { showChatSettingsMenu, hideChatSettingsMenu, showOverlayModal, hideOverlay } from '../../helpers/showComponents'
import get from '../../helpers/get'
import connect from '../../helpers/connect'

// controllers import
import { chatController, messageController } from '../../controllers/index'

// components import (.ts)
import ChatsList from '../../components/chat/chatsList/chatsList'
import ChatControls from '../../components/chat/chatControls/chatControls'
import ChatTitle from '../../components/chat/chatTitle/chatTitle'
import MessagesList from '../../components/chat/messagesList/messagesList'
import RoundBtn from '../../components/roundBtn/roundBtn'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import SecondaryBtn from '../../components/secondaryBtn/secondaryBtn'
import InputField from '../../components/chat/inputField/inputField'
import TextField from '../../components/textField/textField'
import Form from '../../modules/form/form'
import router from '../../router'
import store from '../../store'

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

  /* chats list section */
  chatsListMenu: {
    main: {
      chats: [],
      activeChatId: 0
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
      chatName: '',
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

  /* messages list */
  messagesList: {
    main: {
      messages: [],
      activeUserId: null
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
          showOverlayModal(
            generateModal(
              ctx.modal.addUser.main,
              ctx.modal.addUser.input,
              {
                submit: async (event: Event): Promise<void> => {
                  hideOverlay() // close modal window...
                  const data = submitForm(event)

                  await chatController.addUserToChat({
                    users: [data.user_name],
                    chatId: 493
                  })
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
          showOverlayModal(
            generateModal(
              ctx.modal.removeUser.main,
              ctx.modal.removeUser.input,
              {
                submit: async (event: Event): Promise<void> => {
                  hideOverlay() // close modal window...
                  const data = submitForm(event)
                  await chatController.removeUserFromChat({
                    users: [data.user_name],
                    chatId: 493
                  })
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
        click: async (): Promise<void> => await chatController.deleteChat()
      }
    })
  ]
}

// 2 - create page structure
const page = {
  chatSearch: new ChatControls({
    ...ctx.chatSearch.main,

    childrenList: [
      new InputField(ctx.chatSearch.input)
    ]
  }),

  chatsList: new ChatsList({
    ...ctx.chatsListMenu.main,

    events: {
      click: async (evt: Event): Promise<void> => {
        const chat = findChat(evt)
        chat && await initSelectedChat(chat)
      }
    }
  }),

  chatMenuCtrls: new ChatControls({
    ...ctx.chatMenu.main,

    childrenList: [
      new SecondaryBtn({
        ...ctx.chatMenu.newChatBtn,

        events: {
          click: () => {
            showOverlayModal(
              generateModal(
                ctx.modal.newChat.main,
                ctx.modal.newChat.input,
                {
                  submit: async (event: Event): Promise<void> => {
                    hideOverlay() // close modal window...
                    const data = submitForm(event)
                    await chatController.createChat({ title: data.chat_name })
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
          click: () => router.go('/profile')
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

  messagesList: new MessagesList(ctx.messagesList.main),

  messagesCtrls: new ChatControls({
    ...ctx.messageForm.main,

    childrenList: [
      new InputField(ctx.messageForm.input),
      new RoundBtn(ctx.messageForm.sendBtn)
    ],

    events: {
      submit: (event: Event) => {
        const data = submitForm(event)
        clearInput(event.target as HTMLInputElement)

        console.log('----outgoing message=', data)
      }
    }
  })
}

// 3 - component
class PageChat extends Block {
  constructor () {
    super('div', page)
  }

  async componentDidMount (): Promise<void> {
    await chatController.getChats()

    const activeChatId = localStorage.getItem('active-chat-id')
    if (activeChatId) {
      const activeChat = findChatById(activeChatId)
      activeChat && await initSelectedChat(activeChat)
    }
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }

  componentDidUnmount (): void {
    if (store.getState().chats.length) {
      messageController.leave()
    }

    store.setState('chats', [])
  }
}

// 4 - define mapStateToProps
function mapStateToProps (state: TState): TState {
  return {
    route: get(state, 'route.name'),
    chats: get(state, 'chats'),
    messages: get(state, 'messages'),
    activeChatId: get(state, 'activeChat.id'),
    activeChatTitle: get(state, 'activeChat.title'),
    userAvatar: get(state, 'user.avatar'),
    userFirstName: get(state, 'user.firstName'),
    userSecondName: get(state, 'user.secondName'),
    userId: get(state, 'user.id')
  }
}

// 5 - redraw components after store has been updated
function updateTemplate (propsPage: IProps, propsStore: IProps, propsInitStore: IProps): void {
  // 5.1 - hasRouteChanged
  const hasRouteChanged = propsStore.route !== propsInitStore.route

  // 5.2 - define blocks (components on the page)
  const blocksChatsList = propsPage.chatsList
  const blocksChatsTitle = propsPage.chatHeader.children.childrenList[0]
  const blocksMessagesList = propsPage.messagesList

  // 5.3 - update chatsList
  const hasChatsListChanged = propsStore.chats.length !== propsInitStore.chats.length

  if (hasChatsListChanged || hasRouteChanged) {
    blocksChatsList.setProps({ chats: formatChats(propsStore.chats) })
  }

  // 5.4 - update selected chat
  const hasActiveChatChanged = propsStore.activeChatId !== propsInitStore.activeChatId

  if (hasActiveChatChanged || hasRouteChanged) {
    blocksChatsList.setProps({ activeChatId: propsStore.activeChatId })
    blocksChatsTitle.setProps({ chatName: propsStore.activeChatTitle })
  }

  // 5.5 - update messages list
  const hasMessagesListChanged = propsStore.messages.length !== propsInitStore.messages.length

  if (hasMessagesListChanged || hasRouteChanged) {
    blocksMessagesList.setProps({
      messages: formatMessages(propsStore.messages),
      activeUserId: propsStore.userId
    })
  }
}

// 6 - export page connected to store
export default connect(PageChat, mapStateToProps, updateTemplate)
