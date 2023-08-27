import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Page1 from '../components/Routing/Page1'
import Page2 from '../components/Routing/Page2'
import Page3 from '../components/Routing/Page3'
import ErrorPage from '../components/Routing/ErrorPage'
import Header from '../components/Header/Header'
import Admin from '../components/Routing/Admin'
import User from '../components/Routing/User'

const Router = () => {
  return (
    <>
    <Routes>

        <Route path='/' element={<Header />} >
            <Route path="/" element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} >
                <Route path='admin' element={<Admin />} />
                <Route path='user' element={<User />} />
            </Route>
            <Route path='/page3' element={<Page3 />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    </Routes>
    </>
  )
}

export default Router