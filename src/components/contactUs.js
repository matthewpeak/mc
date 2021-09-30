import React, {useEffect} from 'react'
import {halfFields,halfField,fullField,fields,contactDiv,divider,titleDiv,phys} from './contactUs.module.css'
import { useInView } from "react-intersection-observer"
// import Footer from './footer'

const ContactUs=({handleLoc,title,titleDesc,email,phone,mail,fax,address})=>{
    const [ref, inView] = useInView({threshold:.4})
    const [c,d] = useInView({threshold:1})
  
    useEffect(() => {
        handleLoc('contact')
        return () => {
            handleLoc('')
          };
    },[d,handleLoc])
    return(
        <div id="contact" style={{
			transition: "opacity 600ms, transform 600ms",
			opacity: inView ? 1 : 0,
			transform: `translateY(${inView ? 0 : 100}px)`,
			height: `100vh`
		  }}ref={ref}>
         
    <div className={contactDiv}>
        <div className={titleDiv}>
        <h2>{title}</h2>
        <p>{titleDesc}</p>
        </div>
        <div className={divider}>
        <form  action="https://formspree.io/f/mvoddykl" method="POST" ref={c}>
           <div className={fields}>
            <div className={halfFields}>
            <div className={halfField}>
            <span >Name</span>
            <input type='text' name='name'/>
            </div>
            <div className={halfField}>
            <span>Email</span>
            <input type='text' name='email'/>
            </div>
            </div>
            <div className={fullField}>
                <span>Message</span>
                <textarea  name='message' rows='12'/>
            </div>
            <button type='submit'>send message</button>
            </div>
        </form>
        <div className={phys}>
            <ul>
                <li>
					<h3>Address</h3>
					<span class="contact-addy">{address}</span>
                </li>
                <li>
					<h3>Email</h3>
					<span class="contact-email" >{email}</span>
				</li>
                <li>
					<h3>Phone</h3>
					<span class="contact-phone">{phone}</span>
				</li>
                <li>
					<h3>Mail</h3>
					<span class="contact-phone">{mail}</span>
				</li>
                <li>
					<h3>Fax</h3>
					<span class="contact-phone">{fax}</span>
				</li>
            </ul>
        </div>
        </div>
    </div>
    
   </div>
    )
}

export default ContactUs