// import helpers
import formatTime from '../helpers/formatTime'

// import assets
import defaultAvatar from '../assets/images/avatar.svg'

export const chats = [
  {
    id: 1,
    title: 'secondChat',
    lastMessage: {
      content: 'second message',
      id: 2617,
      time: '2022-04-30T09:42:23+00:00',
      user: {
        avatar: '/a97495f2-0b7e-40c9-886d-736711505dd2/3d6a76ec-eac1-4dee-b527-005a7a0cc23b_image1.jpeg',
        email: 'KrasnokutskiyEA@yandex.ruuu',
        first_name: 'Евгенвьссннн',
        login: 'adminr',
        phone: '+79193911915',
        second_name: 'Краснотеечрррыы'
      }
    },
    unreadCount: 0,
    avatar: null
  }
]

// props interface
export interface IChatCard {
  id: number
  title: string
  lastMessage: {
    id: number
    user: Record<string, string>
    content: string
    time: string
  }
  unreadCount: number
  avatar: string | null
}

export const formatChats = (props: IChatCard[]): Array<Record<string, any>> => {
  return props.map(chat => ({
    id: chat.id,
    title: chat.title,
    lastMessageContent: chat.lastMessage.content,
    unreadCount: chat.unreadCount,
    avatar: chat.avatar ?? defaultAvatar,
    lastMessageTime: chat.lastMessage.time,
    lastMessageTimeFormatted: formatTime(chat.lastMessage.time)
  }))
}

export const messages = [
  {
    id: '1',
    authorId: 'a1',
    authorName: 'Steve Jordan',
    ownerId: 'a1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, nibh sed condimentum dapibus, erat nunc suscipit sem, sed sollicitudin nisi velit non justo. Nulla luctus ligula ac laoreet viverra. Duis quis pellentesque nunc. Phasellus pretium neque orci, et tincidunt risus pretium vel. Vivamus sagittis, lectus quis sollicitudin sagittis, lacus risus faucibus leo, id condimentum arcu magna sed massa. Donec sodales vestibulum erat dapibus viverr Nulla varius in enim at fringilla. Duis at arcu consequat, pulvinar ante non, vehicula felis. Ut at sapien eu sem interdum ultricies id id neque. Aenean non enim iaculis, tincidunt augue vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: null,
    date: '2022-03-24T15:17:02.563Z'
  },
  {
    id: '2',
    authorId: 'a2',
    authorName: 'Peter Ganapolsky',
    ownerId: 'a1',
    text: 'Man, who are you?',
    image: null,
    date: '2022-03-24T15:18:02.563Z'
  },
  {
    id: '3',
    authorId: 'a1',
    authorName: 'Steve Jordan',
    ownerId: 'a1',
    text: 'I am your creator',
    image: null,
    date: '2022-03-24T15:19:02.563Z'
  },
  {
    id: '4',
    authorId: 'a1',
    authorName: 'Steve Jordan',
    ownerId: 'a1',
    text: 'I created you two days ago...',
    image: null,
    date: '2022-03-27T15:20:02.563Z'
  },
  {
    id: '5',
    authorId: 'a2',
    authorName: 'Peter Ganapolsky',
    ownerId: 'a1',
    text: "Ok... I'm calling 911. Seems you need help!",
    image: null,
    date: '2022-03-28T01:21:02.563Z'
  }
]
