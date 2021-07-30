import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {about,content,inner} from './aboutUsCard.module.css'
import { useSpring, animated } from 'react-spring'
const AboutUsCard = ({id,image,title,text,buttonText,link,alt}) =>{
	const props = useSpring({
		to: { opacity: 1,transform:'translateX(0em)' },
		from: { opacity: 0,transform:'translateX(-1em)' },
	  })
	  const imgProp = useSpring({
		to: { opacity: 1,transform:'translateX(0em)' },
		from: { opacity: 0,transform:'translateX(-1em)' },
	  })
	
	// you are going to need to figure out Gatsby Image to display images passed via props
    return(
    <div className={about}>
		<animated.div style={imgProp}>
		<StaticImage src={'../images/genericLaw.jpg'} alt='' width='25 em' display='block' posistion='relative' backgroundSize='cover'/>
		</animated.div>
		<animated.div style={props}>
			<div className={content}>
				<div className={inner}>
						<h2 className='aboutUsTitle'>{title}</h2>
						<p className='aboutUsText'>{text}</p>
						<button>{buttonText}</button>
			 </div>
			</div>
			</animated.div>
	</div>
    )
}


export default AboutUsCard