import * as React from "react"
import { Fragment } from "react"
import Employees from "../components/employees"
import Header from '../components/header'
import { graphql } from 'gatsby'

const Attorneys=({data})=>{
   console.log(data.strapiEmployees.employee)
    return(
    <Fragment>
      <Header/>
        <Employees emp={data.strapiEmployees.employee}/>
    </Fragment>
    )
}

export const query = graphql`
 query AttorniesPageQuery{
  strapiEmployees {
    id
    employee
  }
 }`




export default Attorneys