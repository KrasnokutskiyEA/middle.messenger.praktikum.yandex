import EventBus from './EventBus'
import { set, reset } from '../helpers/set'

export type TState = Record<string, any>

export enum StoreEvents {
  FLOW_SDU = 'flow:store-did-update'
}

class Store extends EventBus {
  readonly state: TState = {}

  constructor (initialState: TState) {
    super()
    this.state = initialState
  }

  public getState (): TState {
    return this.state
  }

  public setState (path: string, value: unknown): void {
    set(this.state, path, value)
    Object.keys(this.listeners).includes(StoreEvents.FLOW_SDU) &&
    this.emit(StoreEvents.FLOW_SDU)
  }

  public resetState (path: string, value: unknown): void {
    reset(this.state, path, value)
    Object.keys(this.listeners).includes(StoreEvents.FLOW_SDU) &&
    this.emit(StoreEvents.FLOW_SDU)
  }
}

export default Store
