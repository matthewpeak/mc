import * as React from 'react'
import {header,headerContent,home} from './header.module.css'
import { StaticImage } from "gatsby-plugin-image"
const Header=()=>{
    return(
       <div className={header}>
           <div className={headerContent}>
               <div></div>
           <StaticImage src={'../images/logo.jpg'} alt='' display='block' height='200px' width='200px' margin='auto'/>
               <span className={home}>HOME</span>
           </div>
       </div>
    )
}

export default Header