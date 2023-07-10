import hero from './hero.js';
import sidebar from './sidebar.js';

const body = document.body;
const main = document.createElement('main');
main.classList.add('content');
main.setAttribute('id', 'home');

body.append(sidebar);
body.append(main);
main.append(hero);
