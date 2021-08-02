import * as React from 'react'
import {halfFields,halfField,fullField,fields,contactDiv,divider} from './contactUs.module.css'
import { useInView } from "react-intersection-observer"

const ContactUs=()=>{
    const [ref, inView] = useInView({threshold:.15})
    return(
        <div style={{
			transition: "opacity 600ms, transform 600ms",
			opacity: inView ? 1 : 0,
			transform: `translateY(${inView ? 0 : 100}px)`,
			height: `100vh`
		  }}ref={ref}>
    <div className={contactDiv}>
        <h2>Get in touch</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
        <div className={divider}>
        <form >
           <div className={fields}>
            <div className={halfFields}>
            <div className={halfField}>
            <label>Name</label>
            <input type='text' name='name'/>
            </div>
            <div className={halfField}>
            <label>Email</label>
            <input type='text' name='email'/>
            </div>
            </div>
            <div className={fullField}>
                <label>Message</label>
                <textarea name='message'rows='5'/>
            </div>
            <button>send message</button>
            </div>
        </form>
        <div>
            <ul>
                <li>
					<h3>Address</h3>
					<span class="contact-addy">12345 Somewhere Road #654<br />
					Nashville, TN 00000-0000<br />
					USA</span>
                </li>
                <li>
					<h3>Email</h3>
					<a class="contact-email" href="#">user@untitled.tld</a>
				</li>
                <li>
					<h3>Phone</h3>
					<span class="contact-phone">(000) 000-0000</span>
				</li>
            </ul>
        </div>
        </div>
    </div>
   </div>
    )
}

export default ContactUs