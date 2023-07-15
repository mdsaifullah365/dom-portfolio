import { createA, createDiv, createInput, createLabel } from './utilities.js';

const contactLinks = [
  {
    icon: 'fa-solid fa-phone',
    text: '+880 1766637772',
    link: 'tel:+8801766637772',
    target_blank: false,
  },
  {
    icon: 'fa-solid fa-envelope',
    text: 'mdsaifullah365@yahoo.com',
    link: 'mailto:mdsaifullah365@yahoo.com',
    target_blank: false,
  },
  {
    icon: 'fa-brands fa-linkedin',
    text: 'mdsaifullah365',
    link: 'https://www.linkedin.com/in/mdsaifullah365/',
    target_blank: true,
  },
  {
    icon: 'fa-brands fa-github',
    text: 'mdsaifullah365',
    link: 'https://github.com/mdsaifullah365',
    target_blank: true,
  },
];

const contact = createDiv('contact');

const cancelBtn = document.createElement('i');
cancelBtn.classList = 'fa-solid fa-xmark fa-2xl';
cancelBtn.id = 'cancel';

const contactInfo = createDiv('contact-info');

const contactDetails = createDiv('contact-details');

contactLinks.forEach(({ icon, text, link, target_blank }) => {
  const contactLink = createA(text, link, target_blank);

  const contactIcon = document.createElement('i');
  contactIcon.classList = icon;

  const contactText = document.createElement('span');
  contactText.innerText = text;

  contactLink.append(contactIcon, contactText);
  contactDetails.append(contactLink);
});

const contactMessage = createDiv('contact-message');

const heading = document.createElement('h3');
heading.classList = 'heading';
heading.innerText = "Let's talk";

const form = document.createElement('form');
form.classList = 'contact-form';

const labelName = createLabel('name', 'Name');
const name = createInput('name', 'name', 'text', '', true); // id , name, type, value, required

const labelEmail = createLabel('email', 'E-mail');
const email = createInput('email', 'email', 'email', '', true); // id , name, type, value,required

const labelMessage = createLabel('message', 'Message');
const message = document.createElement('textarea');
message.id = 'message';
message.setAttribute('required', true);

const submit = createInput('submit', 'submit', 'submit', 'Send message');
submit.classList = 'btn btn-solid';

contactInfo.append(contactDetails);

form.append(labelName, name, labelEmail, email, labelMessage, message, submit);

contactMessage.append(cancelBtn, heading, form);
contact.append(contactInfo, contactMessage);

export default contact;
