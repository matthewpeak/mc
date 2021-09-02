import React from "react"
import { Fragment } from "react"
import { useStaticQuery,graphql } from 'gatsby'
import Nav from './nav'
import Welcome from './welcome'
import AboutUs from './aboutUs'
import WhatWeDo from "./whatWeDo"
import ContactUs from "./contactUs"
import Footer    from "./footer"
import "@fontsource/playfair-display"
import {contentWrapper,mainWrapper} from './index.module.css';
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]',{speed:10000})
}

const Page=({loc,handleLoc})=>{
    const data= useStaticQuery(graphql`query MyQuery {
        strapiWhatWeDo {
          id
          Title
          titledescription
          toplefttitle
          toprightdesc
          toprighttitle
          topleftdesc
          bottomleftdesc
          bottomlefttitle
          bottomrightdesc
          bottomrighttitle
          btntext
        }
        strapiWelcome {
          id
          Title
          welcomeText
          logo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      `)
    return(<Fragment>
        <div className={mainWrapper}>
        <Nav loc={loc}/>
        <div className={contentWrapper}>
        <Welcome id={data.strapiWelcome.id} title={data.strapiWelcome.Title} text={data.strapiWelcome.welcomeText} image={data.strapiWelcome.logo.localFile.childImageSharp.gatsbyImageData} handleLoc={handleLoc}/> 
        <AboutUs handleLoc={handleLoc}/> 
        <WhatWeDo id={data.strapiWhatWeDo.id} title={data.strapiWhatWeDo.Title} titleDesc={data.strapiWhatWeDo.titledescription}topRightTitle={data.strapiWhatWeDo.toprighttitle} topRightDesc={data.strapiWhatWeDo.toprightdesc} topLeftTitle={data.strapiWhatWeDo.toplefttitle} topLeftDesc={data.strapiWhatWeDo.topleftdesc}bottomRightTitle={data.strapiWhatWeDo.bottomrighttitle} bottomRightDesc={data.strapiWhatWeDo.bottomrightdesc} bottomLeftTitle={data.strapiWhatWeDo.bottomlefttitle} bottomLeftDesc={data.strapiWhatWeDo.bottomleftdesc} btnTxt={data.strapiWhatWeDo.btntext} handleLoc={handleLoc}/>
        <ContactUs handleLoc={handleLoc}/>
        </div>
        </div>
        <Footer></Footer>
        </Fragment>)

}

export default Page