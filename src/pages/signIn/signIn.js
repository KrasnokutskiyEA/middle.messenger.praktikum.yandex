import compileTemplate from './signIn.pug';

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  parameters: {
    title: 'Sign In',
    linkTo: '/createAccount.html',
    linkMessage: 'Create account?'
  },
  textFieldParameters: [
    {
      label: 'Username',
      type: 'text',
      name: 'login', 
      id: 'login', 
      placeholder: 'Username',
      required: 'required'
    },
    {
      label: 'Password',
      type: 'text',
      name: 'password', 
      id: 'password', 
      placeholder: 'Password',
      required: 'required'
    }
  ],
  primaryBtnParameters: {
    text: 'Sign In',
    type: 'submit',
    classes: ['mt-auto']
  }
}

// 2 - generate markup
const app = document.getElementById('app')
app.innerHTML = ''
app.insertAdjacentHTML('afterbegin', compileTemplate(ctx));