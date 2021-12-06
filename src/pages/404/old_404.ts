// !! this is ts import !!
// import ErrorMesssage from '../../components/errorMessage/errorMessage'
// import compile404PageTemplate from './404.pug'
// import CenterContent from '../../templates/centerContent/centerContent'
// import Button from '../../components/primaryBtn/primaryBtn2'
// import pageNotFoundLogo from '../../assets/images/ghost.svg'

// styles
// import '../../assets/styles/index.scss'

// 1 - generate context
/*
const ctx = {
  parameters: {
    code: '404',
    message: 'Page Not Found',
    linkTo: '/index.html',
    linkMessage: 'Go Back'
  },
  pageNotFoundLogo
}
*/

// 2 - generate markup
// const app: HTMLElement | null = document.getElementById('app')
// if (app !== null) {
//   app.innerHTML = ''
//   app.insertAdjacentHTML('afterbegin', compile404PageTemplate(ctx))
// }

// 1 - создаем экземпляр сообщения об ошибке
// const errorMessage = new ErrorMesssage(ctx)
/*
const center = new CenterContent({
  child: new Button({
    type: 'button',
    text: 'BTN - 0',
    classes: ['mt-6'],
    events: {
      click: (event: any) => console.log('OLD 0 EVENT=', event)
    }
  }),

  childrenList: [
    new Button({
      type: 'button',
      text: 'BTN - 1',
      classes: ['mt-6'],
      events: {
        click: (event: any) => console.log('OLD1 EVENT=', event)
      }
    }),
    new Button({
      type: 'button',
      text: 'BTN - 2',
      classes: ['mt-6'],
      events: {
        click: (event: any) => console.log('OLD2 EVENT=', event)
      }
    }),
    new Button({
      type: 'button',
      text: 'BTN - 3',
      classes: ['mt-6'],
      events: {
        click: (event: any) => console.log('OLD3 EVENT=', event)
      }
    })
  ]
})
*/

/*
// 2 - помещаем центровщик в DOM
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(center.getContent())
}
*/
