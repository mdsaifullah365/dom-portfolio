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
fetch('/data/projects.json')
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach(
      (
        {
          id,
          title: projectTitle,
          type: projectType,
          images,
          description: projectDescription,
          live,
          code,
        },
        index
      ) => {
        const detailsLink = createA('', `projects/${id}`);

        const project = createDiv('project');

        const thumbnail = createDiv('project-thumbnail');

        const mockup = createImg(
          'project-mockup',
          './img/mockup.png',
          'Thumbnail Mockup'
        );

        const img = createImg('project-img', images[0].src, images[0].alt);

        const info = createDiv('project-info');

        const title = document.createElement('h3');
        title.classList = 'project-title';
        title.innerText = projectTitle;

        const type = createP('project-type');
        type.innerText = projectType;

        const description = createP('project-description');
        let slicedDescription = projectDescription.slice(0, 180); // slice 180 characters
        slicedDescription =
          slicedDescription.slice(0, slicedDescription.lastIndexOf(' ')) +
          ' . . .'; // remove last incomplete word and add dots
        description.innerText = slicedDescription;

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

        info.append(title, type, description, linkContainer);

        if (index % 2 === 0) {
          project.append(thumbnail, info);
          project.style.gridTemplateColumns = '6fr 5fr';
        } else {
          project.append(info, thumbnail);
          project.style.gridTemplateColumns = '5fr 6fr';
        }

        detailsLink.append(project);
        projectContainer.append(detailsLink);

        // Add Event Listener
        detailsLink.addEventListener('click', function (event) {
          event.preventDefault();
        });
      }
    );
  });

container.append(title, projectContainer);
projects.append(container);

export default projects;
