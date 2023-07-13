import {
  createSectionTitle,
  createContainer,
  createSection,
  createDiv,
  createImg,
  createP,
  createA,
} from './utilities.js';

const projects = createSection('projects');

const container = createContainer();

const title = createSectionTitle('Featured Projects');

const projectContainer = createDiv('project-container');

// Fetch Project Data
fetch('/data/data.json')
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach(
      (
        {
          id,
          title: projectTitle,
          type: projectType,
          images,
          description,
          live,
          code,
        },
        index
      ) => {
        const detailsLink = createA('', `projects/${id}`);

        const project = createDiv('project');

        const thumbnail = createDiv('project-thumbnail');

        const mockup = createImg(
          'mockup',
          './img/mockup.png',
          'Thumbnail Mockup'
        );

        const img = createImg('img', images[0].src, images[0].alt);

        const info = createDiv('project-info');

        const title = document.createElement('h3');
        title.classList = 'project-title';
        title.innerText = projectTitle;

        const type = createP('project-type');
        type.innerText = projectType;

        const desc = createP('project-description');
        let slicedDescription = description.slice(0, 180);
        slicedDescription =
          slicedDescription.slice(0, slicedDescription.lastIndexOf(' ')) +
          ' . . .';
        desc.innerText = slicedDescription;

        const linkContainer = createDiv('link-container');

        const liveLink = createA('link link-live', live, true);
        liveLink.innerHTML = `
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Live</span>
        `;

        const codeLink = createA('link link-code', code, true);
        codeLink.innerHTML = `
        <i class="fa-brands fa-github"></i>
        <span>Code</span>
      `;

        thumbnail.append(mockup, img);

        linkContainer.append(liveLink, codeLink);

        info.append(title, type, desc, linkContainer);
        if (index % 2 === 0) {
          project.append(thumbnail, info);
          project.style.gridTemplateColumns = '6fr 5fr';
        } else {
          project.append(info, thumbnail);
          project.style.gridTemplateColumns = '5fr 6fr';
        }

        detailsLink.append(project);
        projectContainer.append(detailsLink);

        detailsLink.addEventListener('click', function (event) {
          event.preventDefault();
        });
      }
    );
  });

container.append(title, projectContainer);
projects.append(container);

export default projects;
