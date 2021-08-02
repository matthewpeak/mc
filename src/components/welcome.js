import * as React from 'react'
import {logo,intro,introDiv,imageDiv} from './welcome.module.css'
import { StaticImage } from "gatsby-plugin-image"

import { useInView } from "react-intersection-observer"


const Welcome =()=>{
	const [ref, inView] = useInView({threshold:.15})


	
    return(
		<div style={{
			transition: "opacity 600ms, transform 600ms",
			opacity: inView ? 1 : 0,
			transform: `translateY(${inView ? 0 : 100}px)`,
			height: `100vh`
		  }}ref={ref}>
        <section className={intro}>
						<div className={introDiv}>
							<div className={imageDiv}>
						<StaticImage src={'../images/logo.jpg'} alt='' display='block' margin='auto'/>
						    </div>
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
		</div>
    )
}

export default Welcome 