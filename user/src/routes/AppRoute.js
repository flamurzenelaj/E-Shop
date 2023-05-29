import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import PurchasePage from '../pages/PurchasePage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import NotificationPage from '../pages/NotificationPage'
import FavoritePage from '../pages/FavouritePage'
import CartPage from '../pages/CartPage'
import AboutPage from '../pages/AboutPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'

function AppRoute() {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/login' render={(props)=><UserLoginPage {...props} key={Date.now} />} />
            <Route path='/contact' render={(props)=><ContactPage {...props} key={Date.now} />} />
            <Route path='/purchase' render={(props)=><PurchasePage {...props} key={Date.now} />} />
            <Route path='/privacy' render={(props)=><PrivacyPage {...props} key={Date.now} />} />
            <Route path='/refund' render={(props)=><RefundPage {...props} key={Date.now} />} />
            <Route path='/about' render={(props)=><AboutPage {...props} key={Date.now} />} />
            
            <Route path='/productdetails/:code' render={(props)=><ProductDetailsPage {...props} key={Date.now} />} />
            <Route path='/notification' render={(props)=><NotificationPage {...props} key={Date.now} />} />
            <Route path='/favourite' render={(props)=><FavoritePage {...props} key={Date.now} />} />
            <Route path='/cart' render={(props)=><CartPage {...props} key={Date.now} />} />
            <Route path='/productcategory/:category' render={(props)=><ProductCategoryPage {...props} key={Date.now} />} />
            <Route path='/productsubcategory/:category/:subcategory' render={(props)=><ProductSubCategoryPage {...props} key={Date.now} />} />
            
       </Routes>
    </Fragment>
  )
}

export default AppRoute