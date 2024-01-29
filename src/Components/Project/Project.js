import React from 'react'
import './Project.css'
import Slider from '../Slider/Slider'
import * as projectData from '../../data/projectsConst'

function Project({project}) {

  return (
    <li className='project__item'>
        <div className='project__carusel'>
        <h3 className='project__carusel-project-name'>{project.title}</h3>
        <div className='project__carusel-pic-container'>
            <img src={project.pic} className='project__carusel-pic' alt='NicePic from my project'></img>
            <img src={project.picsecond} className='project__carusel-pic' alt='NicePic from my project'></img>
            <img src={project.picthird} className='project__carusel-pic' alt='NicePic from my project'></img>
        </div>
        <a href={project.description.link} target='_blank' className='project__link'>Link</a>
        <p className='project__text'>{project.description.description}</p>
        <p className='project__text'>{project.description.mainIdea}</p> 
        <p className='project__text'>{project.description.technologies}</p>  
        </div>
    </li>
            

)
}

export default Project;