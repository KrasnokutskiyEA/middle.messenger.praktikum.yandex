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
  }))
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

// throttle
function throttle (callee: Function, timeout: number): Function {
  let timer: ReturnType<typeof setTimeout> | undefined

  return function perform (...args: unknown[]) {
    if (timer) return

    timer = setTimeout(() => {
      callee(...args)
      clearTimeout(timer)
      timer = undefined
    }, timeout)
  }
}

// handle scroll of a chat messages list
function handleScroll (evt: Event): void {
  const list = evt.target as HTMLUListElement

  if (list) {
    const isEndList = list.scrollTop <= -(list.scrollHeight - list.offsetHeight)
    // const isEndList = list.scrollTop === 0
    console.log(list.scrollTop, list.scrollHeight, list.offsetHeight)
    if (isEndList) {
      const messagesQty = store.getState().messages.length
      if (messagesQty && messagesQty % 20 === 0) {
        console.log('11--GETTING MSG-----')
        messageController.getOldMessages({ offset: messagesQty })
      }
    }
  }
}

// handle scroll of a chat messages list
export const handleScrollThrottled = throttle(handleScroll, 500)
