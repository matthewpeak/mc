import * as React from "react"
import { navigate } from "gatsby"

import {about,content,aboutUsCardImg} from './aboutUsCard.module.css'

const AboutUsCard = ({image,title,text,buttonText,link,alt}) =>{
	
	const handleClick=()=>{
		navigate("/"+link+"/")
	}
	
    return(
    <div className={about}>
	<img src={"https://intense-beach-34041.herokuapp.com"+image[0].url} alt={alt} className={aboutUsCardImg} />
			<div className={content}>
				<div >
						<h2 >{title}</h2>
						<p >{text}</p>
				<button onClick={handleClick}>{buttonText}</button>
			 </div>
			</div>	
	</div>
    )
}


export default AboutUsCard