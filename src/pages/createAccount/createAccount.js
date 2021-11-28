import compileTemplate from './createAccount.pug';

// styles
import '../../assets/styles/index.scss';

// 1 - generate context
const ctx = {
  parameters: {
    title: 'Create Account',
    linkTo: '/signIn.html',
    linkMessage: 'Sign in'
  },
  textFieldParameters: [
    {
      label: 'Email',
      type: 'text',
      name: 'email', 
      id: 'email', 
      placeholder: 'Email',
      required: 'required'
    },
    {
      label: 'Username',
      type: 'text',
      name: 'login', 
      id: 'login', 
      placeholder: 'Username',
      required: 'required'
    },
    {
      label: 'First Name',
      type: 'text',
      name: 'first_name', 
      id: 'first_name', 
      placeholder: 'First Name',
      required: 'required'
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'second_name', 
      id: 'second_name', 
      placeholder: 'Last Name',
      required: 'required'
    },
    {
      label: 'Phone',
      type: 'text',
      name: 'phone', 
      id: 'phone', 
      placeholder: 'Phone',
      required: 'required'
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password', 
      id: 'password', 
      placeholder: 'Password',
      required: 'required'
    },
    {
      label: 'Confirm password',
      type: 'password',
      name: 'confirm_password', 
      id: 'confirm_password', 
      placeholder: 'Confirm password',
      required: 'required'
    }
  ],
  primaryBtnParameters: {
    text: 'Sign Up',
    type: 'submit',
    classes: ['mt-6']
  }
}

// 2 - generate markup
const app = document.getElementById('app')
app.innerHTML = ''
app.insertAdjacentHTML('afterbegin', compileTemplate(ctx));