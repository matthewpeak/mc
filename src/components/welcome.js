import * as React from 'react'
import {logo,intro,introDiv,imageDiv} from './welcome.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { useSpring, animated } from 'react-spring'


const Welcome =()=>{
	const props = useSpring({
		to: { opacity: 1,transform:'translateY(0em)' },
		from: { opacity: 0,transform:'translateY(1em)' },
	  })
	
    return(
		<animated.div style={props}>
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
		</animated.div>
    )
}

export default Welcome 