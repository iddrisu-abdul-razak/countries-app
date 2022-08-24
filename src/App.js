import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ContactScreen from './screens/ContactScreen'
import ProductScreen from './screens/ProductScreen'
import AboutScreen from './screens/AboutScreen'
import Header from './components/Header'

function App(){
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/about' element={<AboutScreen/>} />
        <Route path='/product/name' element={<ProductScreen/>} />

      </Routes></div>
    </BrowserRouter>
  )
}

export default App;