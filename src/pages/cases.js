import React from 'react'
import {z} from './cases.module.css'
import CaseCard from '../components/caseCard.js'
import Header from '../components/header'
import { graphql } from 'gatsby'
import { Fragment } from 'react'


const Cases=({data})=>{
   let y= data.strapiCases.cases.map((card)=><CaseCard id={card.id} header={card.Header} content={card.caseDescription}/>)  
    return(
        <Fragment>
        <Header/>
        <div className={z}>
            {y}
        </div>
        </Fragment>
    )

}

export const query = graphql`
 query CasesPageQuery{
    strapiCases {
        cases
      }
 }`


 

export default Cases