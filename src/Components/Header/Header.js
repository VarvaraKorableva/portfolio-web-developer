import React from 'react'
import './Header.css'
import myImage from '../../Images/mypic.jpg'

function Header() {

  return (
    <header className="header">
        
            <nav className="header__navigation">
              <div className="header__logo-container header_link">
                <div className="header__logo-round">VK</div>
                <p className="header__logo">Varvara Korableva</p>
              </div>
              <ul className="header__container-items">
                <li className="header__container-item header_link">
                  About me
                </li>
                <li className="header__container-item header_link">
                  Projects
                </li>
                <li className="header__container-item header_link">
                  Experience
                </li>
                <li className="header__container-item header_link">
                  Education
                </li>
                <li className="header__container-item header_link">
                  Contact
                </li>
              </ul>
              <div className='header__burger-menu'></div>
            </nav>
           
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
                <div className="header__project-link">Take a look on my Pojects →</div> 
            </div>
            <img src={myImage} className="header__img" alt='My_pic'></img>
          </div>
        </div>
        
    </header>
)
}

export default Header;