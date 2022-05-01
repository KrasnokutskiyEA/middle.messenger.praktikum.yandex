import { StoreEvents, TState } from '../classes/Store'
import store from '../store'
import { IProps } from '../classes/Block'
function connect<T extends new (...props: any[]) => any> (
  Component: T,
  mapStateToProps: (state: TState) => TState,
  updateTemplate: (propsPage: IProps, propsNewStore: IProps, propsInitStore: IProps) => void
): T {
  // using class expression
  return class extends Component {
    constructor (...props: any[]) {
      super({ ...props, ...mapStateToProps(store.getState()) })

      let initState = { ...mapStateToProps(store.getState()) }

      // 2 - update component on state update
      store.on(StoreEvents.FLOW_SDU, () => {
        const newState = mapStateToProps(store.getState())
        updateTemplate(this.props, newState, initState)

        initState = newState
      })
    }
  }
}

export default connect
