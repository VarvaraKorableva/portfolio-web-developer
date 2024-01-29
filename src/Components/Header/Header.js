import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import myImage from '../../Images/mypic.jpg'

function Header() {
  const location = useLocation();

  return (
    <header className="header">
        
            <nav className="header__navigation">
              <Link to={`/`} className="header__logo-container header_link">
                <div className="header__logo-round">VK</div>
                <p className="header__logo">Varvara Korableva</p>
              </Link>
              <ul className="header__container-items">
                <li className="header__container-item">
                  <Link to={`/about`} className='header_link'>About me</Link>
                </li>
                <li className="header__container-item">
                  <Link to={`/projects`} className='header_link'>Projects</Link>
                </li>
                <li className="header__container-item">
                  <Link to={`/experience`} className='header_link'>Experience</Link>
                </li>
                <li className="header__container-item">
                  <Link to={`/education`} className='header_link'>Education</Link>
                </li>
                <li className="header__container-item">
                  <Link to={'/contacts'} className='header_link'>Contact</Link>
                </li>
              </ul>
              <div className='header__burger-menu'></div>
            </nav>
        {location.pathname === '/'?    
        <div className="header__container-wrapper">
          <div className="header__container">
            <div className="header__title-container">
                <h1 className="header__title">Korableva Varvara</h1>
                <h2 className="header__subtitle">Web Developer</h2>
                <p className="header__text">
                    Developer with more than two years of experience 
                    in developing commercial, educational, and pet projects. 
                    I have a strong focus on writing clean, maintainable, and scalable code. 
                    My ultimate goal is to enhance the user experience and provide a seamless 
                    and enjoyable browsing experience.
                </p>
                <Link to={`/projects`} className="header__project-link">Take a look on my Pojects →</Link> 
            </div>
            <img src={myImage} className="header__img" alt='My_pic'></img>
          </div>
        </div>
        :
        <></>
        }
    </header>
)
}

export default Header;