import React from 'react'
import About from './pages/about'
import Projects from './pages/projects'
import Homepage from './pages/homepage'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Header from './components/header'
import ErrorPage from './pages/error'
import {BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Header />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='resume' element={<Resume/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
