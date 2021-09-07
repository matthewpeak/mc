import React from 'react'
import {disclaimer,contactHolder,footer} from './footer.module.css'

const Footer=({disc,address,phone,email,description})=>{

    return(
        <div className={footer}>
             <div className={contactHolder}>
                <p>
                {disc}
                </p>
                <p>
                {phone}
                </p>
                <p>
                 {email}
                </p>
                <p>
                {address}
                </p>
                
             </div>
             <div className={disclaimer}>
               <p> 
                 {description}
               </p>
             </div>
        </div>
    )
}

export default Footer