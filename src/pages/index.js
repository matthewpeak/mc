import * as React from "react"
import { Fragment } from "react"
import Nav from '../components/nav'
import Welcome from '../components/welcome'
import AboutUs from '../components/aboutUs'
import WhatWeDo from "../components/whatWeDo"
import ContactUs from "../components/contactUs"
import "@fontsource/playfair-display"
import './index.css';

const IndexPage =()=>{
  return(
  <Fragment>
  <Nav/>
  <Welcome/> 
  <AboutUs/> 
  <WhatWeDo/>
  <ContactUs/>
  </Fragment>
    )
}

export default IndexPage
