import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'

function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<UserLoginPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Fragment>
  )
}

export default AppRoutes