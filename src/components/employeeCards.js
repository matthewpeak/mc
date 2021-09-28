import * as React from 'react'

import {employeeDiv,employeeInfo} from './employee.module.css'

const Employee =({title,bio,pic})=>{
    
    return(
    <div className={employeeDiv}>
        <img src={"https://intense-beach-34041.herokuapp.com"+pic.url} alt=''height={260} width={260} />
        <div className={employeeInfo}> 
            <h2>{title}</h2>
            <p>{bio}</p>
        </div>
    </div>
    )
}
export default Employee