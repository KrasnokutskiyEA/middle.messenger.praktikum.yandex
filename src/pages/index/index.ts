// - import compileTemplate from './index.pug'

// styles
import '../../assets/styles/index.scss'

// 1 - generate context
// - const ctx = {
// -   pages: {
// -     404: '/404.html',
// -     500: '/500.html',
// -     chat: '/chat.html',
// -     createAccount: '/createAccount.html',
// -     profile: '/profile.html',
// -     signIn: '/signIn.html'
// -   }
// - }
// -
// - // 2 - generate markup
// - const app: HTMLElement | null = document.getElementById('app')
// - if (app !== null) {
// -   app.innerHTML = ''
// -   app.insertAdjacentHTML('afterbegin', compileTemplate(ctx))
// - }

import Button from '../../components/primaryBtn/primaryBtn2'

const ctx = {
  type: 'button',
  text: 'my text1!!!',
  classes: ['mt-6']
}

const btn = new Button(ctx)

const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(btn.getContent())
}

setTimeout(() => {
  console.log('------5 secs passed')
  btn.setProps({
    text: '777'
  })
}, 5000)
