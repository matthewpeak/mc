import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {employeeDiv,employeeInfo,aImage} from './employee.module.css'

const Employee =({title,bio})=>{
    return(
    <div className={employeeDiv}>
        <StaticImage src={'../images/drew.jpg'} display='block' height={400} width={400} posistion='relative' backgroundSize='cover'/>
        <div className={employeeInfo}> 
            <h1>{title}</h1>
            <p>{bio}</p>
        </div>
    </div>
    )
}
export default Employee