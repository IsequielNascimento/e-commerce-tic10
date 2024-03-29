import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Myproducts from './pages/Myproducts'
import Products from './pages/Products'
import Categories from './pages/Categories'

function App() {

  return (
    <>

      <BrowserRouter>
         <Header /> 
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-products' element={<Myproducts />} />
          <Route path='/products' element={<Products />} /> */}
          <Route path='/categories' element={<Categories />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
