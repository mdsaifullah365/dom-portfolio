// Create sidebar
const sidebar = document.createElement('aside');
sidebar.classList.add('sidebar');

// Create Logo wrapper
const logoWrapper = document.createElement('a');
logoWrapper.classList.add('logo');
logoWrapper.setAttribute('href', '#home');

// Create logo
const logo = document.createElement('img');
logo.setAttribute('src', './img/logo.png');
logo.setAttribute('alt', 'Logo');

// Append logo to the logo Wrapper
logoWrapper.append(logo);

// Append logo wrapper to the sidebar
sidebar.append(logoWrapper);

// Create navmenu
const navmenu = document.createElement('nav');
navmenu.classList.add('navmenu');

// Create ul
const ul = document.createElement('ul');

const navItems = [
  { link: '#home', text: 'Home', icon: 'fa-sharp fa-solid fa-house' },
  { link: '#about', text: 'About', icon: 'fa-solid fa-user' },
  { link: '#projects', text: 'Projects', icon: 'fa-solid fa-list-check' },
  { link: '#contact', text: 'Contact', icon: 'fa-solid fa-address-book' },
];

navItems.forEach(({ link, text, icon }) => {
  // Create li(s)
  const li = document.createElement('li');
  const a = document.createElement('a');
  const i = document.createElement('i');
  const span = document.createElement('span');

  i.className = icon;
  span.innerText = text;
  a.setAttribute('href', link);

  a.append(i, span);
  li.append(a);
  ul.append(li); // Append li(s) to the ul
});

// Append ul to the navmenu
navmenu.append(ul);
// Append navmenu to the sidebar
sidebar.append(navmenu);

// Create resume link
const resumeLink = document.createElement('a');
resumeLink.classList.add('resume');
resumeLink.setAttribute('href', '#');

// Create resume icon
const resumeIcon = document.createElement('i');
resumeIcon.className = 'fa-solid fa-file-arrow-down';

// Append resume icon to the resume link
resumeLink.append(resumeIcon);

// Append resume link to the sidebar
sidebar.append(resumeLink);

export default sidebar;
