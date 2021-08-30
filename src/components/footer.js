import React from 'react'
import {disclaimer,contactHolder,footer} from './footer.module.css'

const Footer=()=>{

    return(
        <div className={footer}>
             <div className={contactHolder}>
                <p>
                disclaimer | attorney advertising 
                </p>
                <p>
                Phone: (336) 616-9641 Fax: (336) 338-7820
                </p>
                <p>
                 jm@maclawnc.com 
                </p>
                <p>
                200 N. Main Street Graham NC 27253 P.O. Box 1453 
                Graham NC 27253
                </p>
                
             </div>
             <div className={disclaimer}>
               <p> 
               McMillion Law is a small boutique law firm that prides itself in giving one-on-one consultation to clients in search of trustworthy and accurate legal advice and litigating on their behalf for the best outcome
               </p>
             </div>
        </div>
    )
}

export default Footer