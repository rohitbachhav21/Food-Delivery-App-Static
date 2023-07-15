import React from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"

const App = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Menu' element={<Menu />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
