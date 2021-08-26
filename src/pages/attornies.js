import * as React from "react"
import { Fragment } from "react"
import Employees from "../components/employees"
import "@fontsource/playfair-display"
import {attorniesWrapper} from "./attornies.module.css"

const Attornies=()=>{
    return(
    <Fragment>
        <div className={attorniesWrapper}>
        <Employees/>
        </div>
    </Fragment>
    )
}


export default Attornies