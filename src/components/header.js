import * as React from 'react'
import { navigate } from "gatsby"
import {header,headerContent,home,hidden,homeLabel} from './header.module.css'
import { StaticImage } from "gatsby-plugin-image"
const Header=()=>{
    const handleClick=()=>{
		navigate('/')
	}
    return(
       <div className={header}>
           <div className={headerContent}>
                <div className={hidden}></div> 
           <StaticImage src={'../images/logo.jpg'} alt='' display='block' height='200px' width='200px' margin='auto'/>
                <div onClick={handleClick} className={home}>
                <a className={homeLabel} >HOME</a> 
                </div>
           </div>
       </div>
    )
}

export default Header