import formatTime from './formatTime'
import { chatController, messageController } from '../controllers/index'
import store from '../store'
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

// format chats list
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

// format messages list
export const formatMessages = (props: IChatMessage[]): Array<Record<string, any>> => {
  return props.map(message => ({
    id: message.id,
    userId: message.userId,
    content: message.content,
    time: formatTime(message.time)
  })).reverse()
}

// leave active chat
export const leaveActiveChat = (): void => {
  if (store.getState().activeChat.id) {
    messageController.leave()
    store.setState('messages', [])
  }
}

// init selected chat
export const initSelectedChat = async (chat: Record<string, any>): Promise<void> => {
  // 1 - leave previous chat
  leaveActiveChat()

  // 2 - set active chat
  store.setState('activeChat', chat)
  localStorage.setItem('active-chat-id', `${chat.id}`)

  // 3 - open ws connection for new active chat
  await chatController.getMessageToken(chat.id)

  messageController.connect({
    userId: store.getState().user.id,
    chatId: store.getState().activeChat.id,
    token: store.getState().token.token
  })
}
