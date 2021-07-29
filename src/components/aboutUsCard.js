import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {about,content,inner} from './aboutUsCard.module.css'

const AboutUsCard = ({id,image,title,text,buttonText,link,alt}) =>{
	console.log(image)
	// you are going to need to figure out Gatsby Image to display images passed via props
    return(
    <div className={about}>
		<StaticImage src={'../images/genericLaw.jpg'} alt='' width='25 em' display='block' posistion='relative' backgroundSize='cover'/>
			<div className={content}>
				<div className={inner}>
						<h2 className='aboutUsTitle'>{title}</h2>
						<p className='aboutUsText'>{text}</p>
						<button>{buttonText}</button>
			 </div>
			</div>
	</div>
    )
}


export default AboutUsCard