export default class EventBus {
  readonly listeners: Record<string, Function[]>

  constructor () {
    this.listeners = {}
  }

  on (event: string, callback: (...args: any[]) => void): void {
    if (this.listeners[event] === undefined) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off (event: string, callback: (...args: any[]) => void): void {
    if (this.listeners[event] === undefined) {
      throw new Error(`Нет события: ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    )
  }

  emit (event: string, ...args: unknown[]): void {
    if (this.listeners[event] === undefined) {
      throw new Error(`Нет события: ${event}`)
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args)
    })
  }

  shift (event: string): void {
    this.listeners[event]?.shift()
  }
}
