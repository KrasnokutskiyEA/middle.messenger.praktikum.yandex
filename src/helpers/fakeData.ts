// import helpers
import formatTime from '../helpers/formatTime'

// import assets
import defaultAvatar from '../assets/images/avatar.svg'

// chat card interface
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

// chat message interface
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
  })).reverse()
}
