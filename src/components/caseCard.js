import React from 'react'
import {caseHolder} from './caseCard.module.css'

const CaseCard=({header,content})=>{


    return(
        <div className={caseHolder}>
            <h1>{header}</h1>
            <p>
                {content}
            </p>
        </div>
    )
}

export default CaseCard