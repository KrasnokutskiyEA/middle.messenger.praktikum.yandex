import { IMessageWSGet, IMessageWSConnect } from '../interfaces/IMessageApi'
import { convertKeysToCamelCase } from '../helpers/formatStrings'
import { showMessage } from '../helpers/showComponents'
import store from '../store'

class MessageController {
  private _chatId: number
  private _userId: number
  private _ws: WebSocket
  private _ping: any
  private _token: string

  constructor () {
    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
    this._handleMessage = this._handleMessage.bind(this)
    this._handleError = this._handleError.bind(this)
  }

  private _handleOpen (): void {
    this.getOldMessages({ offset: 0 })
    this._ping = setInterval(() => {
      this._ws.send('')
    }, 10000)
  }

  private _handleClose (evt: CloseEventInit): void {
    this._removeEvents()
    if (evt.wasClean) {
      showMessage('Connection closed', ['message-success'])
    } else {
      showMessage('Connection failure', ['message-error'])
    }
    if (evt.code === 1006) {
      this._reconnect()
    }
  }

  private _addEvents (): void {
    this._ws.addEventListener('open', this._handleOpen)
    this._ws.addEventListener('close', this._handleClose)
    this._ws.addEventListener('message', this._handleMessage)
    this._ws.addEventListener('error', this._handleError)
  }

  private _removeEvents (): void {
    this._ws.removeEventListener('open', this._handleOpen)
    this._ws.removeEventListener('close', this._handleClose)
    this._ws.removeEventListener('message', this._handleMessage)
    this._ws.removeEventListener('error', this._handleError)
  }

  private _handleMessage (evt: MessageEvent): void {
    const data = JSON.parse(evt.data)
    if (Array.isArray(data)) {
      if (!data.length) {
        store.setState('messages', [])
      } else if (data[0].id === 0) {
        store.setState('messages', data.map((item) => convertKeysToCamelCase(item)))
      } else {
        const messages = [
          ...store.state.messages,
          ...data.map((item) => convertKeysToCamelCase(item))
        ]
        store.setState('messages', messages)
      }
    } else if (typeof data === 'object' && data.type === 'message') {
      const messages = [convertKeysToCamelCase(data), ...store.state.messages]
      store.setState('messages', messages)
    }
  }

  public connect (options: IMessageWSConnect): void {
    this._userId = options.userId
    this._chatId = options.chatId
    this._token = options.token
    this._ws = new WebSocket(`${process.env.HOST_WS}/chats/${options.userId}/${options.chatId}/${options.token}`)
    this._addEvents()
  }

  private _reconnect (): void {
    this.connect({
      userId: this._userId,
      chatId: this._chatId,
      token: this._token
    })
  }

  getOldMessages (options: IMessageWSGet): void {
    this._ws.send(JSON.stringify({
      content: options.offset.toString(),
      type: 'get old'
    }))
  }

  public sendMessage (message: string): void {
    this._ws.send(JSON.stringify({
      content: message,
      type: 'message'
    }))
  }

  public leave (): void {
    clearInterval(this._ping)
    this._ws.close()
    this._removeEvents()
  }

  private _handleError (evt: Event): void {
    console.log('_handleError', evt)
  }
}

export default new MessageController()
