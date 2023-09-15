import BaseApi from './BaseApi'
import type { TResponse } from '../types/api'
import type { IAddUserToChatApi, ICreateNewChatApi } from '../interfaces/IChatApi'

class ChatApi extends BaseApi {
  constructor () {
    super({ path: '/chats' })
  }

  async createChat (data: ICreateNewChatApi): Promise<TResponse> {
    return this.post('/', { withCredentials: true, data: JSON.stringify(data) })
  }

  async getChats (): Promise<TResponse> {
    return this.get('/', { withCredentials: true })
  }

  async removeChat (chatId: number): Promise<TResponse> {
    return this.delete('/', { withCredentials: true, data: JSON.stringify({ chatId }) })
  }

  async addUserToChat (data: IAddUserToChatApi): Promise<TResponse> {
    return this.put('/users', { withCredentials: true, data: JSON.stringify(data) })
  }

  async removeUserFromChat (data: IAddUserToChatApi): Promise<TResponse> {
    return this.delete('/users', { withCredentials: true, data: JSON.stringify(data) })
  }

  async getMessageToken (chatId: number): Promise<TResponse> {
    return this.post(`/token/${chatId}`, { withCredentials: true })
  }

  async getChatUsers (chatId: number): Promise<TResponse> {
    return this.get(`/${chatId}/users`, { withCredentials: true })
  }
}

export default new ChatApi()
