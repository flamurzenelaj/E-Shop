import React,{ Fragment, useEffect } from 'react'
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Purchase from '../components/others/Purchase';

function PurchasePage() {
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
    
    <Purchase />

    <div className="Desktop">
      <FooterDesktop />
    </div>
    <div className="Mobile">
      <FooterMobile />
    </div>
  </Fragment>
  )
}

export default PurchasePage