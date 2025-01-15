import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import MyStrongSides from './Components/MyStrongSides/MyStrongSides.js'
import About from './Components/About/About.js'
import Stack from './Components/Stack/Stack.js'
import Footer from './Components/Footer/Footer.js'
import WorkExperience from './Components/WorkExperience/WorkExperience.js'
import Education from './Components/Education/Education.js'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer.js'
import Navigation from './Components/Navigation/Navigation.js'
import ImagePopup from './Components/ImagePopup/ImagePopup.js'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false)
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
        <Header isBurgerMenuCliked={handleBurgerMenuClick}/>
        <MyStrongSides/>
        <Stack/>
        <ProjectContainer
          onCardClick={handleCardClick}
        />
        <WorkExperience/>
        <Education/>
        <About/>
        <Footer/>

        <Navigation
          isBurgerMenuCliked={handleBurgerMenuClick}
          isOpen={isBurgerMenuOpen}
          onClose={closeAllPopups} 
        />

        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;