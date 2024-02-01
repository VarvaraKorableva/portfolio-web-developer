import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css'

function Navigation({isOpen, onClose}) {
  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='navigation__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='navigation_listcontainer'>

          <li className="navigation__list" onClick={onClose}>
            <Link to="#aboutme" className='navigation__listlink'>About me</Link>
          </li>
          <li className="navigation__list" onClick={onClose}>
            <Link to="#projects" className='navigation__listlink'>Projects</Link>
          </li>
          <li className="navigation__list" onClick={onClose}>
            <Link to="#experience" className='navigation__listlink'>Experience</Link>
          </li>
          <li className="navigation__list" onClick={onClose}>
            <Link to="#education" className='navigation__listlink'>Education</Link>
          </li>
          <li className="navigation__list" onClick={onClose}>
            <Link to="#contact" className='navigation__listlink'>Contact</Link>
          </li>
          
        </ul>
      </div>
    </aside>
  )
}

export default Navigation;