import {
  html,
  css,
  javascript,
  react,
  // nextjs,
  bootstrap,
  expressjs,
  git,
  github,
  mongodb,
  mongoose,
  nodejs,
  // redux,
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

export default techs;
