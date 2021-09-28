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
        }strapiAboutUsPage {
          id
          AboutUsCards
        }
        strapiContactUs {
          Address
          Title
          email
          fax
          id
          mail
          phone
          titleDesc
        }strapiFooter {
          id
          address
          email
          disclaimer
          description
          phonenumber
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

      
    return(
    
    <Fragment>
        <div className={mainWrapper}>
        <Nav loc={loc}/>
        <div className={contentWrapper}>
        <Welcome id={data.strapiWelcome.id} title={data.strapiWelcome.Title} text={data.strapiWelcome.welcomeText} image={data.strapiWelcome.logo.localFile.childImageSharp.gatsbyImageData} handleLoc={handleLoc}/> 
        <AboutUs id={data.strapiAboutUsPage.id} cards={data.strapiAboutUsPage.AboutUsCards} handleLoc={handleLoc}/> 
        <WhatWeDo id={data.strapiWhatWeDo.id} title={data.strapiWhatWeDo.Title} titleDesc={data.strapiWhatWeDo.titledescription}topRightTitle={data.strapiWhatWeDo.toprighttitle} topRightDesc={data.strapiWhatWeDo.toprightdesc} topLeftTitle={data.strapiWhatWeDo.toplefttitle} topLeftDesc={data.strapiWhatWeDo.topleftdesc}bottomRightTitle={data.strapiWhatWeDo.bottomrighttitle} bottomRightDesc={data.strapiWhatWeDo.bottomrightdesc} bottomLeftTitle={data.strapiWhatWeDo.bottomlefttitle} bottomLeftDesc={data.strapiWhatWeDo.bottomleftdesc} btnTxt={data.strapiWhatWeDo.btntext} handleLoc={handleLoc}/>
        <ContactUs id={data.strapiContactUs.id}  mail={data.strapiContactUs.mail} fax={data.strapiContactUs.fax} address={data.strapiContactUs.Address} email={data.strapiContactUs.email} phone={data.strapiContactUs.phone} titleDesc={data.strapiContactUs.titleDesc} title={data.strapiContactUs.Title}  handleLoc={handleLoc}/>
        </div>
        </div>
        <Footer id={data.strapiFooter.id} address={data.strapiFooter.address} phone={data.strapiFooter.phonenumber} email={data.strapiFooter.email} description={data.strapiFooter.description} disc={data.strapiFooter.disclaimer}></Footer> 
        </Fragment>)

}

export default Page