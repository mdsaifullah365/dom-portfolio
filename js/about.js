import {
  createSectionTitle,
  createContainer,
  createDiv,
  createSection,
} from './utilities.js';

const aboutMe = `
<p>In the vast digital landscape, where codes converge and pixels dance, I embark on a journey as an aspiring <<web developer>>. With a curious mind and a passion for crafting immersive online experiences, I wield the power of technology to shape the virtual realms. Armed with lines of <<HTML, CSS, and JavaScript>>, I breathe life into ideas, turning visions into tangible realities. Like an artist with a brush, I <<paint my imagination>> onto the canvas of the web, weaving together elegant designs and seamless functionalities. Each line of code is a stroke of creativity, and every project is an opportunity to push boundaries and bring dreams to life.</p><br/>
<p>Behind the screen, my heart beats with the <<rhythm of innovation>>, driven by an insatiable thirst for knowledge. I am constantly exploring the ever-evolving web development landscape, embracing new frameworks and technologies with open arms. Yet, I believe that true mastery lies not only in technical prowess but in empathy for the <<end-users>>. I strive to create intuitive and user-centric designs, ensuring that every website I build becomes a harmonious convergence of aesthetics and <<usability>>. It is my unwavering dedication to excellence that fuels my pursuit of perfection, as I diligently work towards shaping the digital world, one line of code at a time.</p>
`;

const about = createSection('about');

const container = createContainer();

const title = createSectionTitle('About me');

const description = createDiv('description');
description.innerHTML = aboutMe
  .replaceAll('<<', '<span class="highlight">')
  .replaceAll('>>', '</span>');

container.append(title, description);
about.append(container);

export default about;
