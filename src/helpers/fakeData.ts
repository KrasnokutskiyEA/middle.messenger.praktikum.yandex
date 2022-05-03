// import helpers
import formatTime from '../helpers/formatTime'

// import assets
import defaultAvatar from '../assets/images/avatar.svg'

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

// props interface
export interface IChatMessage {
  id: string
  userId: number
  content: string
  time: string
}

export const formatChats = (props: IChatCard[]): Array<Record<string, any>> => {
  return props.map(chat => ({
    id: chat.id,
    title: chat.title,
    lastMessageContent: chat.lastMessage ? chat.lastMessage.content : '',
    unreadCount: chat.unreadCount,
    avatar: chat.avatar ?? defaultAvatar,
    lastMessageTime: chat.lastMessage?.time,
    lastMessageTimeFormatted: chat.lastMessage ? formatTime(chat.lastMessage.time) : ''
  }))
}

export const formatMessages = (props: IChatMessage[]): Array<Record<string, any>> => {
  return props.map(message => ({
    id: message.id,
    userId: message.userId,
    content: message.content,
    time: formatTime(message.time)
  }))
}

export const messages = [
  {
    id: '1',
    userId: 11659,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, nibh sed condimentum dapibus, erat nunc suscipit sem, sed sollicitudin nisi velit non justo. Nulla luctus ligula ac laoreet viverra. Duis quis pellentesque nunc. Phasellus pretium neque orci, et tincidunt risus pretium vel. Vivamus sagittis, lectus quis sollicitudin sagittis, lacus risus faucibus leo, id condimentum arcu magna sed massa. Donec sodales vestibulum erat dapibus viverr Nulla varius in enim at fringilla. Duis at arcu consequat, pulvinar ante non, vehicula felis. Ut at sapien eu sem interdum ultricies id id neque. Aenean non enim iaculis, tincidunt augue vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    time: '2022-03-24T15:17:02.563Z'
  },
  {
    id: '2',
    userId: 10000,
    content: 'Man, who are you?',
    time: '2022-03-24T15:18:02.563Z'
  },
  {
    id: '3',
    userId: 11659,
    content: 'I am your creator',
    time: '2022-03-24T15:19:02.563Z'
  },
  {
    id: '4',
    userId: 11659,
    content: 'I created you two days ago...',
    time: '2022-03-27T15:20:02.563Z'
  },
  {
    id: '5',
    userId: 10000,
    content: "Ok... I'm calling 911. Seems you need help!",
    time: '2022-03-28T01:21:02.563Z'
  }
]
