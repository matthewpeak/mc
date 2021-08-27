import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {employeeDiv,employeeInfo} from './employee.module.css'

const Employee =({title,bio})=>{
    return(
    <div className={employeeDiv}>
        <StaticImage src={'../images/drew.jpg'} alt='' width='200px' height='500px' layout='constrained' objectFit='contain'/>
        <div className={employeeInfo}> 
            <h1>{title}</h1>
            <p>{bio}</p>
        </div>
    </div>
    )
}
export default Employee