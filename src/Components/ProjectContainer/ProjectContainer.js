import React from 'react'
import './ProjectContainer.css'
import Pogination from '../Pogination/Pogination'
import Project from '../Project/Project'

import * as projectData from '../../data/projectsConst'


function ProjectContainer() {

  const[currentPage, setCurrentPage] = React.useState(0)
  const[toRender, setToRender] = React.useState([projectData.projects[0], projectData.projects[1]])
  let quantityPerPage = 2 //кол на 1 странице
  let newArray = Math.trunc(projectData.projects.length / quantityPerPage)

  let totalPages = []
  for (let i = 1; i < newArray; i++) {
    totalPages.push(i);
  }

  function selectPage(pageNumber){
    setCurrentPage(pageNumber -1)
  }  

  function getVisibleItems(){
    let start = currentPage * quantityPerPage
    let end = (currentPage + 1) * quantityPerPage
    let current_arr = projectData.projects.slice(start, end)
    setToRender(current_arr)
  }

  React.useEffect(() => {
    getVisibleItems();
  }, [currentPage]);

  return (
    <section className='project-container'>
        <h2 className='project-container__title'>Projects</h2>
        <ul className='projects__project-container'>
          {toRender.map((project) => (
            <Project 
              project={project}
              key={project.id}
            />
          ))}
        </ul>
        <ul className='pogination__num-container'>
          {totalPages.map((number) => (
            <Pogination 
              number={number}
              key={number}
              selectPage={selectPage}
              currentPage={currentPage}
            />
          ))}
        </ul>

    </section>
)
}

export default ProjectContainer;
