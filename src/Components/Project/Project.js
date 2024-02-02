import React from 'react'
import './Project.css'
import Slider from '../Slider/Slider'
import OneProjectPic from '../OneProjectPic/OneProjectPic'

function Project({project, onCardClick}) {

  return (
    <li className='project__item'>
        <h3 className='project__carusel-project-name'>{project.title}</h3>
        <div className='project__carusel'>
        
        <div className='project__carusel-pic-container'>
            {project.pic.map((item)=> (
                <OneProjectPic key={item.pic_id} item={item} onCardClick={onCardClick}/>
            ))}
        </div>
        <div className='project__text-container'>
            <a href={project.description.link} target='_blank' className='project__link'>Link</a>
            <p className='project__text'>{project.description.description}</p>
            <p className='project__text'>{project.description.mainIdea}</p> 
            <p className='project__text'>{project.description.technologies}</p>  
            </div>
        </div>
    </li>
            

)
}

export default Project;