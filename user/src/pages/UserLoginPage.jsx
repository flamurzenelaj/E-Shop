import React, { useEffect } from 'react'
import { Fragment } from 'react'
import UserLogin from '../components/common/UserLogin';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';

function UserLoginPage() {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <Fragment>
    <div className="Desktop">
      <NavMenuDesktop />
    </div>
    <div className="Mobile">
      <NavMenuMobile />
    </div>
    
    <UserLogin />

  </Fragment>
  )
}

export default UserLoginPage