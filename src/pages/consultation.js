import React, {useState}from 'react'
import {split,consForm,inputH,radioH,textArea,btnHldr} from './consultation.module.css'
import Header from '../components/header.js'
import { Fragment } from 'react'
const Consultation=()=>{

    const[values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        consultType:'',
        message:'',
        phone:""
    })
    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setValues({[nam]: val});
      }

    return(
        <Fragment>
            <Header/>
        <div className={consForm}>
            <h1>Contact Us</h1>
            <div className={split} >
            <div className={inputH}>
            <input   type='text' placeholder="First Name" name="firstName" value={values.firstName} onChange={myChangeHandler}/>
            </div>
            <div className={inputH}>
            <input   type='text' placeholder="Last Name" name="lastName" value={values.lastName} onChange={myChangeHandler}/>
            </div>
            </div>
            <div className={inputH}>
            <input  type='text' placeholder="Email" name="email" value={values.email} onChange={myChangeHandler}/>
            </div>
            <div className={inputH}>
            <input   type='text' placeholder="Phone Number" name="phone" value={values.phone} onChange={myChangeHandler}/>
            </div>
            <div className={radioH} onChange={myChangeHandler}>
                <label>
                <input type="radio" checked={values.consultType==="Professional License Defense"}name="consultType" value="Professional License Defense" /> 
                Professional License Defense
                </label>
                <label>
                <input type="radio" checked={values.consultType==="Law Enforcement Liability"} name="consultType" value="Law Enforcement Liability" />
                Law Enforcement Liability
                </label>
                <label>
                <input type="radio" checked={values.consultType==="Criminal Defense or Appeal"}name="consultType" value="Criminal Defense or Appeal" /> 
                Criminal Defense or Appeal
                </label>
                <label>
                <input type="radio" checked={values.consultType==="Personal Injury"}name="consultType" value="Personal Injury" /> 
                Personal Injury
                </label>
                <label>
                <input type="radio" checked={values.consultType==="Other"}name="consultType" value="Other" />
                Other
                </label>
            </div>
            <textarea className={textArea} name="message" value={values.message} name="message" onChange={myChangeHandler}></textarea>
            <div className={btnHldr}>
            <button >submit</button>
            </div>
        </div>
        </Fragment>
        
    )





}

export default Consultation