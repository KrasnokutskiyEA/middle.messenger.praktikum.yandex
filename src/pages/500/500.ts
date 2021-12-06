// asssets import
import '../../assets/styles/index.scss'
import logo from '../../assets/images/fire.svg'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import ErrorMesssage from '../../components/errorMessage/errorMessage'

// 1 - generate context
const errorMessageProps = {
  code: '500',
  message: 'Internal Server Error',
  linkTo: '/index.html',
  linkMessage: 'Go Back',
  logo
}

// 2 - create page structure
const page = new CenterContent({
  content: new ErrorMesssage(errorMessageProps)
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.getContent())
}
