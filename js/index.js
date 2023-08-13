import aboutMe from './about.js';
import techs from './tech.js';
import contactLinks from './contactLinks.js';

import { createA, createDiv, createImg, createP } from './utilities.js';

const header = document.querySelector('.header');

const navItems = [
  { link: '#home', text: 'Home', icon: 'fa-sharp fa-solid fa-house' },
  { link: '#about', text: 'About', icon: 'fa-solid fa-user' },
  { link: '#projects', text: 'Projects', icon: 'fa-solid fa-list-check' },
  { link: '#contact', text: 'Contact', icon: 'fa-solid fa-address-book' },
];

const ul = document.querySelector('.navmenu ul');

navItems.forEach(({ link, text, icon }) => {
  const li = document.createElement('li');

  const a = createA('', link);

  const i = document.createElement('i');
  i.className = icon;

  const span = document.createElement('span');
  span.innerText = text;

  a.append(i, span);
  li.append(a);
  ul.append(li);
});

// body.append(main);

const darkModeBtn = document.querySelector('.btn-dark-mode');
const darkModePopup = document.querySelector('.dark-mode-popup');
const popupOption = document.querySelector('.popup-option');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const darkModeSliderIcon = document.querySelector('.toggle-dark-mode');

// Event listeners
window.addEventListener('scroll', toggleHeader());
document.body.addEventListener('click', function () {
  hideDarkModePopup();
  hideSidebar();
});
darkModeBtn.addEventListener('click', toggleDarkModePopup);
darkModePopup.addEventListener('click', stopPropagation);
popupOption.addEventListener('click', toggleDarkMode);
sidebar.addEventListener('click', stopPropagation);
hamburger.addEventListener('click', showSidebar);
sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', hideSidebar);
});
window.addEventListener('resize', function (event) {
  innerWidth > 768 ? showSidebar(event) : hideSidebar(event);
});

// Event Handlers
// toggleHeader
function toggleHeader() {
  let prevScrollPos = window.scrollY;

  return function () {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
  };
}

// hideDarkModePopup
function hideDarkModePopup() {
  darkModePopup.style.display = 'none';
}

// toggleDarkModePopup
function toggleDarkModePopup(event) {
  refreshDarkModeBtn();

  if (darkModePopup.style.display === 'block') {
    darkModePopup.style.display = 'none';
  } else {
    darkModePopup.style.display = 'block';
  }

  event.stopPropagation();
}

// toggleDarkMode
function toggleDarkMode() {
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));

  darkMode && localStorage.setItem('darkMode', false);
  darkMode || localStorage.setItem('darkMode', true);

  refreshDarkModeBtn();
}

// refreshDarkModeBtn
function refreshDarkModeBtn() {
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));

  darkMode && darkModeSliderIcon.classList.add('on');
  darkMode || darkModeSliderIcon.classList.remove('on');
}

// stopPropagation
function stopPropagation(event) {
  event.stopPropagation();
}

// showSidebar
function showSidebar(event) {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.transform = 'translateX(0)';
  event.stopPropagation();
}

// hideSidebar
function hideSidebar() {
  if (innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(-100%)';
  }
}

// main.append(header);

// main.append(hero);

const description = document.querySelector('.about .description');

description.innerHTML = aboutMe
  .replaceAll('<<', '<span class="highlight">')
  .replaceAll('>>', '</span>');
// main.append(about);

const techContainer = document.querySelector('.tech-container');

techs.forEach(({ expertiseLevel: level, items }) => {
  const expertiseLevel = createP('expertise-level');
  expertiseLevel.innerText = level;

  const techItems = createDiv('tech-items');

  items.forEach(({ name, icon }) => {
    const item = createDiv('item');

    const logoIcon = createImg('tech-logo', icon, name);

    const techName = createP('tech-name');
    techName.innerText = name;

    item.append(logoIcon, techName);
    techItems.append(item);
    techContainer.append(expertiseLevel, techItems);
  });
});
// main.append(techStack);

const projectContainer = document.querySelector('.project-container');

fetch('/data/projects.json')
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach(
      (
        {
          id,
          title: projectTitle,
          type: projectType,
          images,
          description: projectDescription,
          live,
          code,
        },
        index
      ) => {
        const detailsLink = createA('', `projects/${id}`);

        const project = createDiv('project');

        const thumbnail = createDiv('project-thumbnail');

        const mockup = createImg(
          'project-mockup',
          './img/mockup.png',
          'Thumbnail Mockup'
        );

        const img = createImg('project-img', images[0].src, images[0].alt);

        const info = createDiv('project-info');

        const title = document.createElement('h3');
        title.classList = 'project-title';
        title.innerText = projectTitle;

        const type = createP('project-type');
        type.innerText = projectType;

        const description = createP('project-description');
        let slicedDescription = projectDescription.slice(0, 180); // slice 180 characters
        slicedDescription =
          slicedDescription.slice(0, slicedDescription.lastIndexOf(' ')) +
          ' . . .'; // remove last incomplete word and add dots
        description.innerText = slicedDescription;

        const linkContainer = createDiv('link-container');

        const liveLink = createA('link link-live', live, true);
        liveLink.innerHTML = `
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Live</span>
        `;

        const codeLink = createA('link link-code', code, true);
        codeLink.innerHTML = `
        <i class="fa-brands fa-github"></i>
        <span>Code</span>
      `;

        thumbnail.append(mockup, img);

        linkContainer.append(liveLink, codeLink);

        info.append(title, type, description, linkContainer);

        if (index % 2 === 0) {
          project.append(thumbnail, info);
          project.style.gridTemplateColumns = '6fr 5fr';
        } else {
          project.append(info, thumbnail);
          project.style.gridTemplateColumns = '5fr 6fr';
        }

        detailsLink.append(project);
        projectContainer.append(detailsLink);

        // Add Event Listener
        detailsLink.addEventListener('click', function (event) {
          event.preventDefault();
        });
      }
    );
  });
// main.append(projects);

const copyright = document.querySelector('.copyright');
copyright.innerHTML = `&copy ${new Date().getFullYear()} <span class="highlight">Md Saif Ullah</span>`;

const socialLinks = document.querySelector('.social-links');

contactLinks.forEach(({ icon, text, link, target_blank }) => {
  const contactLink = createA(text, link, target_blank);

  const contactIcon = document.createElement('i');
  contactIcon.classList = icon;

  contactLink.append(contactIcon);
  socialLinks.append(contactLink);
});
// main.append(footer);

// Contact Popup

const contactDetails = document.querySelector('.contact-details');

contactLinks.forEach(({ icon, text, link, target_blank }) => {
  const contactLink = createA(text, link, target_blank);

  const contactIcon = document.createElement('i');
  contactIcon.classList = icon;

  const contactText = document.createElement('span');
  contactText.innerText = text;

  contactLink.append(contactIcon, contactText);
  contactDetails.append(contactLink);
});

// Event Listeners
document.querySelectorAll('.btn-contact').forEach((button) => {
  button.addEventListener('click', showContact);
});

const contact = document.querySelector('.contact-popup');
// Event Handlers
function showContact() {
  contact.style.display = 'grid';
  contact.querySelector('.btn-cancel').addEventListener('click', removeContact);
}

function removeContact() {
  contact.style.display = 'none';
}
