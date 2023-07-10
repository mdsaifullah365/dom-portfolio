const hero = document.createElement('section');
hero.classList.add('hero');

const container = document.createElement('div');
container.classList.add('container');

const info = document.createElement('div');
info.classList.add('info');

const greetings = document.createElement('p');
greetings.classList.add('greetings');
greetings.innerText = 'Hi, there!';

const name = document.createElement('h1');
name.classList.add('name');
name.innerText = 'I am Saif';

const description = document.createElement('p');
description.classList.add('description');
description.innerText =
  'I am a frontend web developer. I can provide clean code and pixel perfect design to make interactive with web animations.';

const contactLink = document.createElement('a');
contactLink.setAttribute('href', '#contact');

const btnLight = document.createElement('button');
btnLight.classList.add('btn');
btnLight.classList.add('btn-light');
btnLight.innerText = 'Contact me';

contactLink.append(btnLight);

const resumeLink = document.createElement('a');
resumeLink.setAttribute('href', '#');

const btnSolid = document.createElement('button');
btnSolid.classList.add('btn');
btnSolid.classList.add('btn-solid');
btnSolid.innerText = 'Download resume';

resumeLink.append(btnSolid);

info.append(greetings, name, description, contactLink, resumeLink);

const imageWrapper = document.createElement('div');
imageWrapper.classList.add('image');

const img = document.createElement('img');
img.setAttribute('src', './img/my-photo.png');
img.setAttribute('alt', 'Photo of Md Saif Ullah');

imageWrapper.append(img);

container.append(info, imageWrapper);
hero.append(container);

export default hero;
