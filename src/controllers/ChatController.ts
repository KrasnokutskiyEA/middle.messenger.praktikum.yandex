import { showMessage, showOverlaySpinner, hideOverlay } from '../helpers/showComponents'
import { IAddUserToChatApi, ICreateNewChatApi } from '../interfaces/IChatApi'
import showError from '../helpers/showError'
import store from '../classes/Store'
import router from '../router'

class ChatController {
  async createChat (data: ICreateNewChatApi): Promise<void> {
    try {
      showOverlaySpinner()
      const chatId = await chatApi.createChat(data)
      store.setState('chatId', chatId)
      showMessage('Chat has been created', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async getChats (): Promise<void> {
    try {
      showOverlaySpinner()
      const chats = await chatApi.getChats()
      store.setState('chats', chats)

      if (!store.state.chatId) {
        store.setState('chatId', chats[0]?.id || null)
      }
    } catch (e) {
      router.go('/sign-in')
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async deleteChat (): Promise<void> {
    try {
      showOverlaySpinner()
      await chatApi.deleteChat(store.state.chatId)
      showMessage('Chat has been deleted', ['message-success'])
      await this.getChats()
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async addUserToChat (data: IAddUserToChatApi): Promise<void> {
    try {
      showOverlaySpinner()
      await chatApi.addUserToChat(data)
      showMessage('User has been added to chat', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async removeUserFromChat (data: IAddUserToChatApi): Promise<void> {
    try {
      showOverlaySpinner()
      await chatApi.removeUserFromChat(data)
      showMessage('User has been removed from chat', ['message-success'])
    } catch (e) {
      showError(e)
    } finally {
      hideOverlay()
    }
  }

  async getMessageToken (chatId: number): Promise<void> {
    try {
      // showOverlaySpinner()
      const token = await chatApi.getMessageToken(chatId)
      store.setState('token', token)
    } catch (e) {
      showError(e)
    } finally {
      // hideOverlay()
    }
  }

  async getChatUsers (chatId: number): Promise<void> {
    try {
      // showOverlaySpinner()
      const chatUsers = await chatApi.getChatUsers(chatId)
      store.setState('chatUsers', chatUsers)
    } catch (e) {
      showError(e)
    } finally {
      // hideOverlay()
    }
  }
}

export default new ChatController()
