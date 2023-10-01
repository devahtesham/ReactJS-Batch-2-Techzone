import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainSection from '../components/section/MainSection'
import CartSection from '../components/section/CartSection'
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/Login'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<MainSection />} />
        <Route path='/cart' element={<CartSection />} />
    </Routes>
  )
}

export default Router