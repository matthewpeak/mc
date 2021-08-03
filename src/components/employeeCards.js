import * as React from 'core-js/library/fn/reflect/es7/metadata'
import { StaticImage } from "gatsby-plugin-image"
import {employeeDiv,employeeInfo} from './employee.module.css'

const Employee =({title,bio})=>{
    return(
    <div className={employeeDiv}>
        <StaticImage/>
        <div className={employeeInfo}> 
            <h1>{title}</h1>
            <p>{bio}</p>
        </div>
    </div>
    )
}
export default Employee