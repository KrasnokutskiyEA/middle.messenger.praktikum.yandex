import { Block, IBloc } from '../../classes/Block'

// template imports
import errorMessageCompileTemplate from './errorMessage.pug'
// import Button from '../../components/primaryBtn/primaryBtn2'

// component
class ErrorMessage extends Block {
  constructor (props: IBloc) {
    super('div', { ...props })
  }

  render (): HTMLElement {
    return this.compile(errorMessageCompileTemplate, this.props)
  }
}

export default ErrorMessage
