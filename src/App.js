import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import MyStrongSides from './components/MyStrongSides/MyStrongSides'
import About from './components/About/About'
import Stack from './components/Stack/Stack'
import Footer from './components/Footer/Footer'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Education from './components/Education/Education'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import Navigation from './components/Navigation/Navigation'
import ImagePopup from './components/ImagePopup/ImagePopup'

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