import compileTemplate from './404.pug';
import '../../assets/styles/global.scss';
import './404.module.scss';

const ctx = { data: 'hello' }

document.body.innerHTML = ''
document.body.insertAdjacentHTML('afterbegin', compileTemplate(ctx));
