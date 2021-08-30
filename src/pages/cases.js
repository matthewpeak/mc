import React from 'react'
import {z} from './cases.module.css'
import CaseCard from '../components/caseCard.js'
import Header from '../components/header'
import { Fragment } from 'react'


const Cases=()=>{
    let y=[{
    id:1,
    header:'Personal Injury',
    content:'McMillion Law accepts all cases in which someone has been harmed through the fault of another persons actions.'},
    {
        id:2, 
        header:'Criminal Defense',
    content:'McMillion Law provides an in depth review of the prosecution’s case against the accused to protect the rights of our clients. We defend clients in Alamance County (Burlington, Mebane, Graham, Gibsonville), Orange County (Mebane, Hillsborough, Carrboro, and Chapel Hill) and Chatham County (Pittsboro and Siler City). McMillion Law also provides DWI, DUI, and DUID (drunk driving or driving under the influence of drugs) representation.   While not an extensive list of all the types of cases our firm handles, we do handle both felony and misdemeanor cases. It is imperative, if you are charged with one of these crimes, to seek out representation to make sure that your rights are being taken care of. '},
    {header:'Professional License Defense',
     content:'McMillion Law represents other attorneys, law students, doctors, pharmacists, nurses, teachers, accountants, other medical professionals, law enforcement officers, and multiple other professionals that are required to maintain a state license to provide certain services. McMillion Law defends these licensed professionals through all administrative hearings and through the appeals process if necessary. This includes through grievance hearings, assisting you through character and fitness hearings, providing assistance during licensing applications to minimize risk, defending you before licensing board disciplinary hearings, and appealing decisions made by those boards if needed.McMillion Law takes pride in defending licensed professionals before their respective North Carolina State boards that includes, but is not limited to'
    },{
        id:3,
        header:'Law Enforcement Liability',
        content:'McMillion Law represents both plaintiffs and defendants in cases involving law enforcement liability. Having prior law enforcement experience, McMillion Law can provide indepth knowledge and provide further research to give a comprehensive overview of your rights in a case. McMillion aw will litigate, consult, or give counsel on various issues involving law enforcement including arrest, seizure, tactics, policy, use of force, and pursuits.'
    }
]

    y= y.map((card)=><CaseCard id={card.id} header={card.header} content={card.content}/>)  

    return(
        <Fragment>
        <Header/>
        <div className={z}>
            {y}
        </div>
        </Fragment>
    )

}

export default Cases