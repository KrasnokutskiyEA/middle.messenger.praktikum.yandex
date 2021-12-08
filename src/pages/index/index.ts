// asssets import
import '../../assets/styles/index.scss'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import Form from '../../modules/form/form'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import LinkList from '../../components/linkList/linkList'

// 1 - generate context
const formProps = {
  title: 'Table of contents'
}

const linkProps = [
  { label: '/404', addr: '/404.html' },
  { label: '/500', addr: '/500.html' },
  { label: '/chat', addr: '/chat.html' },
  { label: '/createAccount', addr: '/createAccount.html' },
  { label: '/profile', addr: '/profile.html' },
  { label: '/signIn', addr: '/signIn.html' }
]

const btnProps = [{
  text: 'Test GET request',
  id: 'test-get-btn',
  type: 'button',
  classes: ['mt-6'],
  disabled: false,
  events: {
    click: () => console.log('GET REQUEST')
  }
},
{
  text: 'Test POST request',
  id: 'test-post-btn',
  type: 'button',
  classes: ['mt-6', 'mb-4'],
  disabled: false,
  events: {
    click: () => console.log('POST REQUEST')
  }
}
]

// 2 - create page structure
const page = new CenterContent({
  content: new Form({
    ...formProps,
    // childrenList: btnProps.map(p => new PrimaryBtn(p))
    childrenList: [
      new LinkList({ list: linkProps }),
      ...btnProps.map(p => new PrimaryBtn(p))
    ]
  })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}
