import React,{useEffect} from 'react'
import {logo,intro,introDiv,imageDiv} from './welcome.module.css'
import { StaticImage } from "gatsby-plugin-image"

import { useInView } from "react-intersection-observer"


const Welcome =({handleLoc})=>{
	const [ref, inView] = useInView({threshold:.4})
    const [c,d] = useInView({threshold:1})
	useEffect(() => {
            handleLoc('welcome')
			return () => {
				handleLoc('')
			  };
    }, [d])
	
    return(
		<div id="welcome" style={{
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
							<h1 ref={c}>Legal Professionals</h1>
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