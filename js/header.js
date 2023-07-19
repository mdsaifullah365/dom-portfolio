import sidebar from './sidebar.js';
import {
  createA,
  createButton,
  createContainer,
  createDiv,
  createImg,
  createLabel,
  createP,
  createSpan,
} from './utilities.js';

const header = document.createElement('header');
header.classList = 'header';

const container = createContainer();

const leftPanel = createDiv('left');
const rightPanel = createDiv('right');

const hamburger = createDiv('hamburger');

for (let i = 0; i < 3; i++) {
  const bar = createDiv('bar');
  hamburger.append(bar);
}

const logoLink = createA('logo', '#home');
const logo = createImg('img', './img/logo.png', 'Logo');

const contactBtn = createButton('btn-contact');
contactBtn.innerHTML = '<i class="fa-solid fa-address-book"></i>';

const resumeBtn = createButton('btn-resume');
resumeBtn.innerHTML = '<i class="fa-solid fa-file-arrow-down"></i>';

const darkModeBtn = createButton('btn-dark-mode');
darkModeBtn.innerHTML = `
<i class='fa-solid fa-circle-half-stroke'></i>
<p class='dropdown'>
	<i class='fa-solid fa-chevron-down'></i>
</p>
`;

const darkModePopup = createDiv('dark-mode-popup');

const popupTitle = createP('popup-title');

const titleText = createSpan('');
titleText.innerText = 'Switch Appearance';

const titleIcon = createLabel('');
titleIcon.innerHTML = `<i class='fa-solid fa-circle-half-stroke'></i>`;

const popupOption = createP('popup-option');

const optionText = createSpan('');
optionText.innerText = 'Dark Mode';

const optionIcon = createLabel('');
optionIcon.classList = 'toggle-dark-mode';

const slider = createSpan('slider');
const circle = createSpan('circle');

logoLink.append(logo);
leftPanel.append(hamburger, logoLink);

popupTitle.append(titleText, titleIcon);
optionIcon.append(slider, circle);
popupOption.append(optionText, optionIcon);
darkModePopup.append(popupTitle, popupOption);

rightPanel.append(contactBtn, resumeBtn, darkModeBtn);

container.append(leftPanel, rightPanel);

header.append(container);

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
window.addEventListener('resize', function () {
  innerWidth > 768 ? showSidebar() : hideSidebar();
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
  if (darkModePopup.parentNode === container) {
    container.removeChild(darkModePopup);
  }
}

// toggleDarkModePopup
function toggleDarkModePopup(event) {
  event.stopPropagation();

  refreshDarkModeBtn();

  if (darkModePopup.parentNode === container) {
    container.removeChild(darkModePopup);
  } else {
    container.appendChild(darkModePopup);
  }
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

  darkMode && optionIcon.classList.add('on');
  darkMode || optionIcon.classList.remove('on');
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

export default header;
