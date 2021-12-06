// import base class
import { Block, IBloc } from '../../classes/Block'

// import template
import errorMessageCompileTemplate from './errorMessage.pug'

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
