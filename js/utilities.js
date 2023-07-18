const createSection = (sectionName = '') => {
  const section = document.createElement('section');
  section.classList.add(sectionName);
  section.classList.add('section');
  section.id = sectionName;

  return section;
};

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

const createP = (className = '') => {
  const p = document.createElement('p');
  p.classList = className;

  return p;
};

const createSpan = (className = '') => {
  const span = document.createElement('span');
  span.classList = className;

  return span;
};

const createImg = (className = '', src = '', alt = '') => {
  const img = document.createElement('img');
  img.classList = className;
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  return img;
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

const createInput = (
  id = '',
  name = '',
  type = '',
  value = '',
  required = false
) => {
  const input = document.createElement('input');
  input.id = id;
  input.setAttribute('name', name);
  input.setAttribute('type', type);
  input.setAttribute('value', value);
  if (required) input.setAttribute('required', required);

  return input;
};

const createLabel = (forValue = '', message = '') => {
  const label = document.createElement('label');
  label.setAttribute('for', forValue);
  label.innerText = message;

  return label;
};

export {
  createSectionTitle,
  createContainer,
  createDiv,
  createSection,
  createImg,
  createP,
  createSpan,
  createButton,
  createA,
  createInput,
  createLabel,
};
