export interface ICreateNewChatApi {
  title: string
}

export interface IAddUserToChatApi {
  users: number[]
  chatId: number
}
