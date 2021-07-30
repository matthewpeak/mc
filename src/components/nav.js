import * as React from "react"
import {sideBar,sideDiv,sideA,sideLi} from './nav.module.css'

const Nav =()=>{
    return(	
<section className={sideBar}>
<div className={sideDiv}>
        <nav>
            <ul>
                <li className={sideLi}><a className={sideA} href="#intro">Welcome</a></li>
                <li className={sideLi}><a className={sideA} href="#one">Who we are</a></li>
                <li className={sideLi}><a className={sideA} href="#two">What we do</a></li>
                <li className={sideLi}><a className={sideA} href="#three">Get in touch</a></li>
            </ul>
        </nav>
    </div>
</section>)
}

export default Nav