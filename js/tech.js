import {
  createSectionTitle,
  createContainer,
  createDiv,
  createImg,
  createP,
  createSection,
} from './utilities.js';
import {
  html,
  css,
  javascript,
  react,
  nextjs,
  bootstrap,
  expressjs,
  git,
  github,
  mongodb,
  mongoose,
  nodejs,
  redux,
  sass,
  tailwindcss,
  typescript,
  vscode,
} from './icon.js';

const techs = [
  {
    expertiseLevel: 'Expert',
    items: [
      { name: 'JavaScript', icon: javascript },
      { name: 'React', icon: react },
      { name: 'Tailwind CSS', icon: tailwindcss },
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      // { name: 'Next JS', icon: nextjs },
    ],
  },
  {
    expertiseLevel: 'Comfortable',
    items: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Express', icon: expressjs },
      { name: 'MongoDB', icon: mongodb },
      { name: 'SASS', icon: sass },
    ],
  },
  {
    expertiseLevel: 'Familiar',
    items: [
      { name: 'TypeScript', icon: typescript },
      { name: 'Mongoose', icon: mongoose },
      { name: 'Bootstrap', icon: bootstrap },
      // { name: 'Redux', icon: redux },
    ],
  },
  {
    expertiseLevel: 'Tools',
    items: [
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
      { name: 'VS Code', icon: vscode },
    ],
  },
];

const tech = createSection('tech');

const title = createSectionTitle('Tech Stack');

const container = createContainer();

const techContainer = createDiv('tech-container');

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

container.append(title, techContainer);
tech.append(container);

export default tech;
