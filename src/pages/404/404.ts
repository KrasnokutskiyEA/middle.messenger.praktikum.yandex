// asssets import
import '../../assets/styles/index.scss'
import logo from '../../assets/images/ghost.svg'

// components import
import CenterContent from '../../templates/centerContent/centerContent'
import ErrorMesssage from '../../components/errorMessage/errorMessage'

// 1 - generate context
const ctx = {
  parameters: {
    code: '404',
    message: 'Page Not Found',
    linkTo: '/index.html',
    linkMessage: 'Go Back'
  },
  logo
}

// 2 - create page structure
const page = new CenterContent({
  content: new ErrorMesssage(ctx)
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.getContent())
}
