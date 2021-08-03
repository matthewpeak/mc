import * as React from "react"
import { Fragment } from "react"
import Nav from '../components/nav'
import Welcome from '../components/welcome'
import AboutUs from '../components/aboutUs'
import WhatWeDo from "../components/whatWeDo"
import ContactUs from "../components/contactUs"
import "@fontsource/playfair-display"
import {contentWrapper,mainWrapper} from './index.module.css';
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const IndexPage =()=>{
  return(
  <Fragment>
  <div className={mainWrapper}>
  <Nav/>
  <div className={contentWrapper}>
  <Welcome/> 
  <AboutUs/> 
  <WhatWeDo/>
  <ContactUs/>
  </div>
  </div>
  </Fragment>
    )
}

export default IndexPage
