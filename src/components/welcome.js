import React,{useEffect} from 'react'
import {logo,intro,introDiv,imageDiv} from './welcome.module.css'
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"



const Welcome =({handleLoc,title,text,image})=>{
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
						    <GatsbyImage image={getImage(image)} alt=''/>
						    </div>
							<h1 ref={c}>{title}</h1>
							<p>{text}</p>
							<button>learn more</button>
						</div>
		</section>
		</div>
    )
}

export default Welcome 