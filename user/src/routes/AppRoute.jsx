import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import PurchasePage from '../pages/PurchasePage'

function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<UserLoginPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/purchase' element={<PurchasePage />} />
      </Routes>
    </Fragment>
  )
}

export default AppRoutes