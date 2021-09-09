import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {employeeDiv,employeeInfo,aImage} from './employee.module.css'

const Employee =({title,bio,pic})=>{
    console.log(pic)
    return(
    <div className={employeeDiv}>
        <img src={"http://localhost:1337"+pic.url} height={260} width={260} />
        <div className={employeeInfo}> 
            <h2>{title}</h2>
            <p>{bio}</p>
        </div>
    </div>
    )
}
export default Employee