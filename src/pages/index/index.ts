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

// 1 - создаем экземпляр кнопки
const btn = new Button({
  type: 'button',
  text: 'old button',
  classes: ['mt-6'],
  withInternalId: true,
  events: {
    click: (event: any) => console.log('OLD EVENT=', event)
  }
})

// 2 - помещаем кнопку в DOM
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(btn.getContent())
}

// 3 - обновим пропсы
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
