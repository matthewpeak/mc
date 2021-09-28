import * as React from 'react'
import Employee from './employeeCards'
import {employeeHolder} from './employee.module.css'




const Employees=({emp})=>{
    
   const employees = emp.map(employee=><Employee key= {employee.id} title={employee.name} bio={employee.bio} pic={employee.picture} />)
    return(
        <div className={employeeHolder}>
            {employees}
        </div>
    )

}

export default Employees
