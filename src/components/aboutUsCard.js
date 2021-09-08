import * as React from "react"
import { navigate } from "gatsby"

import {about,content,inner} from './aboutUsCard.module.css'

const AboutUsCard = ({image,title,text,buttonText,link,alt}) =>{
	
	const handleClick=()=>{
		navigate("/"+link+"/")
	}
	
    return(
    <div className={about}>
	<img src={"http://localhost:1337"+image[0].url} alt={alt} height={200} width={200}/>
			<div className={content}>
				<div className={inner}>
						<h2 >{title}</h2>
						<p >{text}</p>
				<button onClick={handleClick}>{buttonText}</button>
			 </div>
			</div>	
	</div>
    )
}


export default AboutUsCard