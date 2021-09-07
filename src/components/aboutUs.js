import React,{useEffect} from "react"
import AboutUsCard from "./aboutUsCard"
import {aboutUs} from './aboutUs.module.css'
import { useInView } from "react-intersection-observer"
const AboutUs=({handleLoc,cards})=>{
   
    // let cards = [
    //     { 
    //         id:1,
    //         image:'../images/genericlaw.jpg',
    //         title:'About Us',
    //         text:'McMillion Law takes on cases involving licensed professionals, law enforcement liability, criminal defense and individuals who have been injured through no fault of their own.',
    //         buttonText:'SET UP A CONSULTATION',
    //         link:'fdsafas',
    //         alt:'law',
    //     },
    //     {   id:2,
    //         image:'../images/headshot.png',
    //         title:'Our Attorneys',
    //         text:'are the best',
    //         buttonText:'Learn More',
    //         link:'fasdfjasld',
    //         alt:'head shot',
    //     }
    // ]
     
     cards = cards.map(card =><AboutUsCard key={card.id} link={card.link}title={card.title} text={card.description} image={card.image} alt={card.alt} buttonText={card.btnText} link={card.link}/>)
     const [ref, inView] = useInView({threshold:.4})
     const [c,d] = useInView({threshold:.7})
     useEffect(() => {
          handleLoc('about')
          return () => {
            handleLoc('')
          };
    }, [d])
    return(
        <div id="who" style={{
			transition: "opacity 600ms, transform 600ms",
			opacity: inView ? 1 : 0,
			transform: `translateX(${inView ? 0 : -1}em)`,
            height: `100vh`
		  }}ref={ref}>
        <section ref={c} className={aboutUs}>
            {cards}
        </section>
        </div>
    )
}
export default AboutUs