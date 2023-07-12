import about from './about.js';
import hero from './hero.js';
import sidebar from './sidebar.js';
import techStack from './tech.js';

const body = document.body;
const main = document.createElement('main');
main.classList.add('content');
main.setAttribute('id', 'home');

body.append(sidebar);
body.append(main);
main.append(hero);
main.append(about);
main.append(techStack);
