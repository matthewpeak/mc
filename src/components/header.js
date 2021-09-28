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
                <div onClick={handleClick} role='button' onKeyDown={this.handleClick}  tabIndex={0}className={home}>
                <span className={homeLabel} >HOME</span> 
                </div>
           </div>
       </div>
    )
}

export default Header