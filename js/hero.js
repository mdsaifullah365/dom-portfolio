import {
  createButton,
  createContainer,
  createDiv,
  createImg,
  createP,
  createSection,
} from './utilities.js';

const hero = createSection('hero');

const container = createContainer();

const info = createDiv('hero-info');

const greetings = createP('greetings');
greetings.innerText = 'Hi, there!';

const name = document.createElement('h1');
name.classList.add('name');
name.innerText = 'I am Saif';

const description = createP('description');
description.innerText =
  'I am a frontend web developer. I can provide clean code and pixel perfect design to make interactive with web animations.';

const contactBtn = createButton('btn btn-light btn-contact');
contactBtn.innerText = 'Contact me';

const resumeBtn = createButton('btn btn-solid btn-resume');
resumeBtn.innerText = 'Download resume';

const imgContainer = createDiv('hero-img-container');
const img = createImg('img', './img/my-photo.png', 'Photo of Md Saif Ullah');

info.append(greetings, name, description, contactBtn, resumeBtn);

imgContainer.append(img);

container.append(info, imgContainer);
hero.append(container);

export default hero;
