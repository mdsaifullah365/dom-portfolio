import {
  createA,
  createButton,
  createContainer,
  createDiv,
  createP,
} from './utilities.js';
import contactLinks from './contactLinks.js';

const footer = document.createElement('footer');
footer.classList = 'footer';

const top = createDiv('footer-top');

const text = createP('text');
text.innerText = 'Reach out and say hi!';

const contactBtn = createButton('btn btn-solid btn-contact');
contactBtn.innerText = 'Drop a message';

const bottom = createDiv('footer-bottom');

const container = createContainer();

const copyright = createP('copyright');
copyright.innerHTML = `&copy ${new Date().getFullYear()} <span class="highlight">Md Saif Ullah</span>`;

const socialLinks = createDiv('social-links');

contactLinks.forEach(({ icon, text, link, target_blank }) => {
  const contactLink = createA(text, link, target_blank);

  const contactIcon = document.createElement('i');
  contactIcon.classList = icon;

  contactLink.append(contactIcon);
  socialLinks.append(contactLink);
});

top.append(text, contactBtn);
container.append(copyright, socialLinks);
bottom.append(container);
footer.append(top, bottom);

export default footer;
