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
import CenterChildren from '../../templates/centerChildren/centerChildren'
const btn = new Button({
  type: 'button',
  text: 'old button',
  classes: ['mt-6'],
  withInternalId: true,
  events: {
    click: (event: any) => console.log('OLD EVENT=', event)
  }
})

// 1 - создаем экземпляр центровщика
const center = new CenterChildren({
  withInternalId: true,
  type: 'center',
  button: btn
})

// 2 - помещаем центровщик в DOM
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(center.getContent())
}

// 3 - обновим пропсы кнопки

setTimeout(() => {
  console.log('------2 sec passed')
  btn.setProps({
    text: 'new button',
    classes: ['mt-5'],
    events: {
      click: (event: any) => console.log('NEW EVENT=', event)
    }
  })
}, 2000)
