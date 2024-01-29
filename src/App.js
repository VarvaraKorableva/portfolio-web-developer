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

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <MyStrongSides/>
      <Stack></Stack>
      <ProjectContainer></ProjectContainer>
      <WorkExperience></WorkExperience>
      <Education></Education>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
