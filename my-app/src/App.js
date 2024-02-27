import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './commen/Header'
import Menu from './commen/Menu'
import Footer from './commen/Footer'
import Home from './pages/Home'
import Read from './pages/Read'
import Create from './pages/Create'
import Search from './pages/Search'
import Update from './pages/Update'
import Headroom from 'react-headroom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Headroom>
        <Header />
        <Menu />
        </Headroom>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/read' element={<Read />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
