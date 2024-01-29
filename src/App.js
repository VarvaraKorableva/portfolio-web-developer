import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import MyStrongSides from './Components/MyStrongSides/MyStrongSides'
import About from './Components/About/About'
import Stack from './Components/Stack/Stack'
import Footer from './Components/Footer/Footer'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Education from './Components/Education/Education'
import ProjectContainer from './Components/ProjectContainer/ProjectContainer'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/about"
          element={
            <main>
              <About></About>
            </main>
          }>
        </Route>
        <Route
          path="/experience"
          element={
            <main>
              <WorkExperience></WorkExperience>
            </main>
          }>
        </Route>
        <Route
          path="/education"
          element={
            <main>
              <Education></Education>
            </main>
          }>
        </Route>
        <Route
          path="/projects"
          element={
            <main>
              <ProjectContainer></ProjectContainer>
            </main>
          }>
        </Route>
        <Route
          path="/contacts"
          element={
            <main>
              <Contact></Contact>
            </main>
          }>
        </Route>
        <Route
          path="/"
          element={
            <main>
              <MyStrongSides/>
              <Stack></Stack>
              <ProjectContainer></ProjectContainer>
            </main>
          }>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
