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

const createSection = (className = '') => {
  const section = document.createElement('section');
  section.classList = className;

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

export {
  createSectionTitle,
  createContainer,
  createDiv,
  createSection,
  createImg,
  createP,
};
