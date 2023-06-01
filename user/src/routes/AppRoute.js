import React, { Fragment, useEffect, useState } from 'react'
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
import SearchPage from '../pages/SearchPage'
import RegisterPage from '../pages/RegisterPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import ProfilePage from '../pages/ProfilePage'
import axios from 'axios'
import AppURL from '../api/AppURL'
import NavMenuDesktop from '../components/common/NavMenuDesktop'

function AppRoute() {

  const [user, setUser] = useState({});

  useEffect(()=>{
    axios.get(AppURL.UserData).then(response=>{
      setUser(response.data);
    }).catch(error=>{

    })
    },[]);
  return (
    <Fragment>
      <NavMenuDesktop user={user} setUser={setUser} />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login'  element={<UserLoginPage  user={user} setUser={setUser} />} />
            <Route path='/register' element={<RegisterPage user={user} setUser={setUser} />} />
            <Route path='/forget' element={<ForgetPasswordPage />} />
            <Route path='/reset/:id' element={<ResetPasswordPage />} />
            <Route path='/profile'  element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/purchase' element={<PurchasePage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/refund' element={<RefundPage />} />
            <Route path='/productdetails/:code' element={<ProductDetailsPage />} />
            <Route path='/notification' element={<NotificationPage />} />
            <Route path='/favourite' element={<FavoritePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/productcategory/:category' element={<ProductCategoryPage />} />
            <Route path='/productsubcategory/:category/:subcategory' element={<ProductSubCategoryPage />} />
            <Route path='/productbysearch/:searchKey' element={<SearchPage />} />
        </Routes>
    </Fragment>
  )
}

export default AppRoute