import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'
import { ICreateNewChatApi } from '../interfaces/IChatApi'
import { initSelectedChat, leaveActiveChat } from '../helpers/chatUtils'
import chatApi from '../api/ChatApi'
import showError from '../helpers/showError'
import store from '../store'
import router from '../router'

class ChatController {
  async getChats (): Promise<void> {
    try {
      showOverlaySpinner()
      const chats = await chatApi.getChats() as Array<Record<string, unknown>>
      store.setState('chats', chats)
    } catch (e) {
      router.go('/sign-in')
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async createChat (data: ICreateNewChatApi): Promise<void> {
    try {
      await chatApi.createChat(data)
      await this.getChats()
      showMessage('Chat has been created', ['message-success'])

      const newActiveChat = store.getState().chats[0]
      await initSelectedChat(newActiveChat)
    } catch (e) {
      showError(e)
    }
  }

  async deleteChat (): Promise<void> {
    try {
      await chatApi.removeChat(store.getState().activeChat.id)
      await this.getChats()
      showMessage('Chat has been deleted', ['message-success'])

      const newActiveChat = store.getState().chats[0]
      if (newActiveChat?.id) {
        await initSelectedChat(newActiveChat)
      } else {
        leaveActiveChat()
        store.resetState('activeChat', {})
      }
    } catch (e) {
      showError(e)
    }
  }

  async addUserToChat (data: { users: number[] }): Promise<void> {
    try {
      showOverlaySpinner()
      await chatApi.addUserToChat({ ...data, chatId: store.getState().activeChat.id })
      showMessage('User has been added to chat', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async removeUserFromChat (data: { users: number[] }): Promise<void> {
    try {
      showOverlaySpinner()
      await chatApi.removeUserFromChat({ ...data, chatId: store.getState().activeChat.id })
      showMessage('User has been removed from chat', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async getMessageToken (chatId: number): Promise<void> {
    try {
      const token = await chatApi.getMessageToken(chatId)
      store.setState('token', token)
    } catch (e) {
      showError(e)
    }
  }

  async getChatUsers (chatId: number): Promise<void> {
    try {
      const chatUsers = await chatApi.getChatUsers(chatId)
      store.setState('chatUsers', chatUsers)
    } catch (e) {
      showError(e)
    }
  }
}

export default new ChatController()
