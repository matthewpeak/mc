import React from 'react'
import {caseHolder,caseText} from './caseCard.module.css'

const CaseCard=({header,content})=>{


    return(
        <div className={caseHolder}>
            <h1>{header}</h1>
            <p className={caseText}>
                {content}
            </p>
        </div>
    )
}

export default CaseCard