import React from 'react';
import './ProjectContainer.css';
import Pogination from '../Pogination/Pogination';
import Project from '../Project/Project';
import * as projectData from '../../data/projectsConst';

function ProjectContainer({ onCardClick }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [toRender, setToRender] = React.useState([projectData.projects[0], projectData.projects[1]]);
  const quantityPerPage = 2; 

  const totalPages = Math.ceil(projectData.projects.length / quantityPerPage);

  function selectPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function getVisibleItems() {
    const start = (currentPage - 1) * quantityPerPage;
    const end = start + quantityPerPage;
    const current_arr = projectData.projects.slice(start, end);
    setToRender(current_arr);
  }

  React.useEffect(() => {
    getVisibleItems();
  }, [currentPage]);


  return (
    <section className='project-container' id="projects">
      <h2 className='project-container__title'>Projects</h2>
      <ul className='projects__project-container'>
        {toRender.map((project) => (
          <Project
            project={project}
            key={project.id}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
      <ul className='pogination__num-container'>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pogination
            number={index + 1}
            key={index + 1}
            selectPage={selectPage}
            currentPage={currentPage}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProjectContainer;
