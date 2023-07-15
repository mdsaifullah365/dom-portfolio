import { createA, createImg } from './utilities.js';

const navItems = [
  { link: '#home', text: 'Home', icon: 'fa-sharp fa-solid fa-house' },
  { link: '#about', text: 'About', icon: 'fa-solid fa-user' },
  { link: '#projects', text: 'Projects', icon: 'fa-solid fa-list-check' },
  { link: '#contact', text: 'Contact', icon: 'fa-solid fa-address-book' },
];

const sidebar = document.createElement('aside');
sidebar.classList.add('sidebar');

const logoLink = createA('logo', '#home');

const logo = createImg('img', './img/logo.png', 'Logo');

const navmenu = document.createElement('nav');
navmenu.classList.add('navmenu');

const ul = document.createElement('ul');

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

const resumeLink = createA('resume', '#');

const resumeIcon = document.createElement('i');
resumeIcon.className = 'fa-solid fa-file-arrow-down';

const tooltip = document.createElement('span');
tooltip.classList = 'tooltip';
tooltip.innerText = 'Download resume';

logoLink.append(logo);
navmenu.append(ul);
resumeLink.append(resumeIcon, tooltip);
sidebar.append(logoLink, navmenu, resumeLink);

export default sidebar;
