import React from 'react'
import './Header.css'
import myImage from '../../Images/mypic.jpg'
import resumePath from '../../Images/CV_KorablevaVarvara.pdf'
import { HashLink as Link } from 'react-router-hash-link';

function Header({isBurgerMenuCliked}) {

  return (
    <header className="header">
        
      <nav className="header__navigation">
        <div className="header__logo-container header_link">
          <div className="header__logo-round">VK</div>
          <p className="header__logo">Varvara Korableva</p>
        </div>
        <ul className="header__container-items">
          <li className="header__container-item">
            <Link to="#aboutme" className='header_link'>About me</Link>
          </li>
          <li className="header__container-item header_link">
            <Link to="#projects" className='header_link'>Projects</Link>
          </li>
          <li className="header__container-item header_link">
            <Link to="#experience" className='header_link'>Experience</Link>
          </li>
          <li className="header__container-item header_link">
            <Link to="#education" className='header_link'>Education</Link>
          </li>
          <li className="header__container-item header_link">
            <Link to="#contact" className='header_link'>Contact</Link>
          </li>
        </ul>
        <div className='header__burger-menu' onClick={isBurgerMenuCliked}></div>
      </nav>
           
        <div className="header__container-wrapper">
          <div className="header__container">
            <div className="header__title-container">
                <h1 className="header__title">Korableva Varvara</h1>
                <h2 className="header__subtitle">Web Developer</h2>
                <p className="header__text">
                    Developer with more than three years of experience 
                    in web-development. 
                    I have a strong focus on writing clean, maintainable, and scalable code. 
                    My ultimate goal is to enhance the user experience and provide a seamless 
                    and enjoyable browsing experience.
                </p>
                  {/* <Link to={'#projects'} className="header__project-link">Take a look on my Pojects →</Link> */}

                <a href={resumePath} download="WebDeveloper_KorablevaVarvara.pdf" className="header__project-link">
                  Download Resume
                </a>
            </div>
            <img src={myImage} className="header__img" alt='My_pic'></img>
          </div>
        </div>
        
    </header>
)
}

export default Header;