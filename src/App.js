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

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  
  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false)
  }

  return (
    <div className="App">
        <Header isBurgerMenuCliked={handleBurgerMenuClick}/>
        <MyStrongSides/>
        <Stack/>
        <ProjectContainer/>
        <WorkExperience/>
        <Education/>
        <About/>
        <Footer/>

        <Navigation
          isBurgerMenuCliked={handleBurgerMenuClick}
          isOpen={isBurgerMenuOpen}
          onClose={closeAllPopups} 
        />
    </div>
  );
}

export default App;