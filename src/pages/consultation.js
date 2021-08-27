import React, {useState}from 'react'
import {split,consForm,inputH,radioH} from './consultation.module.css'

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
        <form className={consForm}>
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
                <input type="radio" checked={values.consultType==="Professional License Defense"}name="consultType" name="Professional License Defense" /> 
                <input type="radio" checked={values.consultType==="Law Enforcement Liability"} name="consultType" name="Law Enforcement Liability" />
                <input type="radio" checked={values.consultType==="Criminal Defense or Appeal"}name="consultType" name="Criminal Defense or Appeal" /> 
                <input type="radio" checked={values.consultType==="Personal Injury"}name="consultType" name="Personal Injury" /> 
                <input type="radio" checked={values.consultType==="other"}name="consultType" name="other" />
            </div>
            <textarea name="message" value={values.message} name="message" onChange={myChangeHandler}></textarea>
            <button>submit</button>
        </form>
    )





}

export default Consultation