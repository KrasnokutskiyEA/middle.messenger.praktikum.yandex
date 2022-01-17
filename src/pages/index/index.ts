// asssets import
import '../../assets/styles/index.scss'

// http transport import
import HTTPTransport from '../../classes/HttpTransport'

// components import (.ts)
import CenterContent from '../../templates/centerContent/centerContent'
import Form from '../../modules/form/form'
import PrimaryBtn from '../../components/primaryBtn/primaryBtn'
import LinkList from '../../components/linkList/linkList'

// 1 - generate context
const formIProps = {
  title: 'Table of contents'
}

const linkIProps = [
  { label: '/404', addr: '/404.html' },
  { label: '/500', addr: '/500.html' },
  { label: '/chat', addr: '/chat.html' },
  { label: '/createAccount', addr: '/createAccount.html' },
  { label: '/profile', addr: '/profile.html' },
  { label: '/signIn', addr: '/signIn.html' }
]

const btnIProps = [{
  text: 'Test GET request',
  id: 'test-get-btn',
  type: 'button',
  classes: ['mt-6'],
  disabled: false,
  events: {
    click: async () => await getData(
      'https://jsonplaceholder.typicode.com/comments', { data: { postId: 1 } }
    )
  }
},
{
  text: 'Test POST request',
  id: 'test-post-btn',
  type: 'button',
  classes: ['mt-6', 'mb-4'],
  disabled: false,
  events: {
    click: async () => await postData('https://jsonplaceholder.typicode.com/posts', {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      data: { title: 'foo', body: 'bar', userId: 1 }
    })
  }
}
]

// 2 - create page structure
const page = new CenterContent({
  content: new Form({
    ...formIProps,
    // childrenList: btnIProps.map(p => new PrimaryBtn(p))
    childrenList: [
      new LinkList({ list: linkIProps }),
      ...btnIProps.map(p => new PrimaryBtn(p))
    ]
  })
})

// 3 - generate markup
const app: HTMLElement | null = document.getElementById('app')
if (app !== null) {
  app.innerHTML = ''
  app.appendChild(page.render())
}

// 4 - utility functuions
const getData = async (url: string, payload: object): Promise<void> => {
  try {
    const { response } = await new HTTPTransport().get(url, payload)
    console.log('GET response=', JSON.parse(response))
  } catch (e) {
    console.log('GET e=', e)
  }
}

const postData = async (url: string, payload: object): Promise<void> => {
  try {
    const { response } = await new HTTPTransport().post(url, payload)
    console.log('POST response=', JSON.parse(response))
  } catch (e) {
    console.log('POST e=', e)
  }
}
