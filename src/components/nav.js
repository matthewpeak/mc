import * as React from "react"
import {sideBar,sideDiv,sideA,sideLi} from './nav.module.css'
import {Link} from "gatsby"
const Nav =()=>{
    

    return(	
<section className={sideBar}>
<div className={sideDiv}>
        <nav>
            <ul>
                <li className={sideLi}><Link className={sideA} to="/#welcome">Welcome</Link></li>
                <li className={sideLi}><Link className={sideA} to="/#who">WHO WE ARE</Link></li>
                <li className={sideLi}><Link className={sideA} to="/#what">WHAT WE DO</Link></li>
                <li className={sideLi}><Link className={sideA} to="/#contact">GET IN TOUCH </Link></li>
            </ul>
        </nav>
    </div>
</section>)
}

export default Nav