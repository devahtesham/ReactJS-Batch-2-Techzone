import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainSection from '../components/section/MainSection'
import CartSection from '../components/section/CartSection'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<MainSection />} />
        <Route path='/cart' element={<CartSection />} />
    </Routes>
  )
}

export default Router