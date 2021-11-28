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
  ]
}

// 2 - generate markup
document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));