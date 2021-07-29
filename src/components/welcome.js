import * as React from 'react'
import {logo,intro,introDiv} from './welcome.module.css'
const Welcome =()=>{
    return(
        <section className={intro}>
						<div className={introDiv}>
							<img className={logo} src="images/logo.jpg" alt="logo" />
							<h1>Legal Professionals</h1>
							<p>Personal Injury and Medical Malpractice
								+ 
								Criminal Defense and Traffic Tickets
								+
								Professional License Defense 
								+
								Police Misconduct</p>
							<button>learn more</button>
						</div>
		</section>
    )
}

export default Welcome 