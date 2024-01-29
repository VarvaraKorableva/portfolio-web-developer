import React from 'react'
//import { Route, Routes } from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header'
import MyStrongSides from './Components/MyStrongSides/MyStrongSides'
//import About from './Components/About/About'
import Stack from './Components/Stack/Stack'
import Footer from './Components/Footer/Footer'
//import WorkExperience from './Components/WorkExperience/WorkExperience'
//import Education from './Components/Education/Education'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer'
//import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <MyStrongSides/>
      <Stack></Stack>
      <ProjectContainer></ProjectContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
