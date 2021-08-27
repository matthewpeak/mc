import React from "react"
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


class IndexPage extends React.Component {
   state={
     loc:'welcome'
   }
   handleLoc=(x)=>{
      this.setState({loc:x})
   }
   
  render(){
    console.log(this.state.loc)
  return(
  <Fragment>
  <div className={mainWrapper}>
  <Nav loc={this.state.loc}/>
  <div className={contentWrapper}>
  <Welcome handleLoc={this.handleLoc}/> 
  <AboutUs handleLoc={this.handleLoc}/> 
  <WhatWeDo handleLoc={this.handleLoc}/>
  <ContactUs handleLoc={this.handleLoc}/>
  </div>
  </div>
  </Fragment>
    )
  }
}

export default IndexPage
