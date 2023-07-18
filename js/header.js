import {
  createButton,
  createContainer,
  createDiv,
  createLabel,
  createP,
  createSpan,
} from './utilities.js';

const header = document.createElement('header');
header.classList = 'header';

const container = createContainer();

const leftSide = createDiv('left');
const rightSide = createDiv('right');

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

popupTitle.append(titleText, titleIcon);
optionIcon.append(slider, circle);
popupOption.append(optionText, optionIcon);
darkModePopup.append(popupTitle, popupOption);

rightSide.append(contactBtn, resumeBtn, darkModeBtn);

container.append(leftSide, rightSide);

header.append(container);

// Event listeners
window.addEventListener('scroll', toggleHeader());
document.body.addEventListener('click', hideDarkModePopup);
darkModeBtn.addEventListener('click', toggleDarkModePopup);
darkModePopup.addEventListener('click', stopPropagation);
popupOption.addEventListener('click', toggleDarkMode);

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

  darkMode === null && localStorage.setItem('darkMode', false);
  darkMode === true && localStorage.setItem('darkMode', false);
  darkMode === false && localStorage.setItem('darkMode', true);

  refreshDarkModeBtn();
}

// refreshDarkModeBtn
function refreshDarkModeBtn() {
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));

  darkMode === null && optionIcon.classList.add('on');
  darkMode === true && optionIcon.classList.add('on');
  darkMode === false && optionIcon.classList.remove('on');
}

// stopPropagation
function stopPropagation(event) {
  event.stopPropagation();
}

export default header;
