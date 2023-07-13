const createSectionTitle = (title) => {
  const sectionHeader = document.createElement('header');
  sectionHeader.classList.add('section-header');

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('title');
  sectionTitle.innerText = title;

  const line = document.createElement('div');
  line.classList.add('line');

  sectionHeader.append(sectionTitle, line);

  return sectionHeader;
};

const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  return container;
};

const createDiv = (className = '') => {
  const div = document.createElement('div');
  div.classList = className;

  return div;
};

const createSection = (sectionName = '') => {
  const section = document.createElement('section');
  section.classList = sectionName;
  section.id = sectionName;

  return section;
};

const createImg = (className = '', src = '', alt = '') => {
  const img = document.createElement('img');
  img.classList = className;
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  return img;
};

const createP = (className = '') => {
  const p = document.createElement('p');
  p.classList = className;

  return p;
};

const createButton = (className = '') => {
  const button = document.createElement('button');
  button.classList = className;

  return button;
};

const createA = (className = '', href = '#', target_blank = false) => {
  const a = document.createElement('a');
  a.classList = className;
  a.setAttribute('href', href);

  if (target_blank) a.setAttribute('target', '_blank');

  return a;
};

export {
  createSectionTitle,
  createContainer,
  createDiv,
  createSection,
  createImg,
  createP,
  createButton,
  createA,
};
