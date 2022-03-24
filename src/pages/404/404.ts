// asssets import
import logo from '../../assets/images/ghost.svg'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/page/page.pug'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import ErrorMesssage from '../../components/errorMessage/errorMessage'

// 1 - generate context
const ctx = {
  code: '404',
  message: 'Page Not Found',
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
export default class Page404 extends Block {
  constructor () {
    super('div', page)
  }

  render (): HTMLElement {
    return this.compile(template, this.props)
  }
}
