// asssets import
import logo from '../../assets/images/ghost.svg'

// import base class
import { Block } from '../../classes/Block'

// template import
import template from '../../templates/centerContent/centerContent.pug'

// components import (.ts)
import ErrorMesssage from '../../components/errorMessage/errorMessage'
import Link from '../../components/link/link'
import router from '../../router'

// 1 - generate context
const ctx = {
  main: {
    code: '404',
    message: 'Page Not Found',
    logo
  },
  link: {
    label: 'Go Back'
  }
}

// 2 - create page structure
const page = {
  content: new ErrorMesssage({
    ...ctx.main,

    link: new Link({
      ...ctx.link,

      events: {
        click: (event: Event) => {
          event.preventDefault()
          router.back()
        }
      }
    })
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
