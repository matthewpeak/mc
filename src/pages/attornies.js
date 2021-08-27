import * as React from "react"
import { Fragment } from "react"
import Employees from "../components/employees"
import "@fontsource/playfair-display"
import {attorniesWrapper} from "./attornies.module.css"
import Header from '../components/header'

const Attornies=()=>{
    return(
    <Fragment>
      <Header/>
        <Employees/>
    </Fragment>
    )
}


export default Attornies