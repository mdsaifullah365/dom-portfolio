import about from './about.js';
import contact from './contact.js';
import hero from './hero.js';
import projects from './projects.js';
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
main.append(projects);

// Event Listeners
document.querySelectorAll('.btn-contact').forEach((button) => {
  button.addEventListener('click', showContact);
});

// Event Handlers
function showContact() {
  body.appendChild(contact);
  contact.querySelector('.btn-cancel').addEventListener('click', removeContact);
}

function removeContact() {
  contact.remove();
}
