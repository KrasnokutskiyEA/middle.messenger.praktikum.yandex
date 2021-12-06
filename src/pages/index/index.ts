import compileIndexPageTemplate from './index.pug'

// styles
import '../../assets/styles/index.scss'

// 1 - generate context
const ctx = {
  pages: {
    404: '/404.html',
    500: '/500.html',
    chat: '/chat.html',
    createAccount: '/createAccount.html',
    profile: '/profile.html',
    signIn: '/signIn.html'
  }
}

/// 2 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.insertAdjacentHTML('afterbegin', compileIndexPageTemplate(ctx))
}

// !! this is ts import !!
// import CenterChildren from '../../templates/centerChildren/centerChildren'

// 1 - создаем экземпляр центровщика
// const center = new CenterChildren({})
// const indexPage = new IndexPageTemplate()

// 2 - помещаем центровщик в DOM
// const app: HTMLElement | null = document.getElementById('app')
// if (app !== null) {
//   app.innerHTML = ''
//   app.appendChild(center.getContent())
// }
