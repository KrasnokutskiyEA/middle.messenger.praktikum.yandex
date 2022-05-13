export interface IMessageWSGet {
  offset: number
}

export interface IMessageWSConnect {
  userId: number
  chatId: number
  token: string
}
