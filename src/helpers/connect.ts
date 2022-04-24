import store, { StoreEvents, TState } from '../classes/Store'
import { IProps } from '../classes/Block'
function connect<T extends new (...props: any[]) => any> (Component: T, mapStateToProps: (state: TState) => TState, updateTemplate: (props: IProps) => void): T {
  // using class expression
  return class extends Component {
    constructor (...props: any[]) {
      super({ ...props, ...mapStateToProps(store.getState()) })

      store.on(StoreEvents.FLOW_SDU, () => {
        // update component by adding part of the state when state has been updated
        this.setProps({ ...mapStateToProps(store.getState()) })

        updateTemplate(this.props)
      })
    }
  }
}

export default connect
