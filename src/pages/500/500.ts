// asssets import
import '../../assets/styles/index.scss'
import logo from '../../assets/images/fire.svg'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/page/page.pug'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import ErrorMesssage from '../../components/errorMessage/errorMessage'

// 1 - generate context
const ctx = {
  code: '500',
  message: 'Internal Server Error',
  linkTo: '/index.html',
  linkMessage: 'Go Back',
  logo
}

// 2 - create page structure
const page = {
  content: new CenterContent({
    content: new ErrorMesssage(ctx)
  })
}

// 3 - component
export default class Page500 extends Block {
  constructor () {
    super('div', page)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
