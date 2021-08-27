import * as React from "react"
import {sideBar,sideDiv,sideA,sideLi} from './nav.module.css'
import {Link} from "gatsby"
const Nav =({loc})=>{
    

    return(	
<section className={sideBar}>
<div className={sideDiv}>
        <nav>
            <ul>
                <li className={sideLi}><Link className={sideA} style={{color: loc==="welcome"? "red":"white"}} to="/#welcome">Welcome</Link></li>
                <li className={sideLi}><Link className={sideA}  style={{color: loc==='about'? "red":"white"}}to="/#who">WHO WE ARE</Link></li>
                <li className={sideLi}><Link className={sideA} style={{color:loc==="what"? "red":"white"}}to="/#what">WHAT WE DO</Link></li>
                <li className={sideLi}><Link className={sideA} style={{color: loc==="contact"? "red":"white"}}to="/#contact">GET IN TOUCH </Link></li>
            </ul>
        </nav>
    </div>
</section>)
}

export default Nav