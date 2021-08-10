import React, { useEffect, useState } from 'react'
import PDF from './PDF.js'
import './Form.css'
const Form = () => {
    const[click,setClick]=useState(false)
    const [institution,setInstitution]=useState("")
    const [name,setName]=useState("")
    const [date,setDate]=useState()
    useEffect(()=>{
       { if(institution !=="" && name !=="" && date !=="")
        setClick(true)
        else setClick(false)
    }
    
    },[institution,name,date])
    return (
        <>
            <div className="heading">Dummy Certificate Generator(Note: Pls set Zoom to 100%)</div>
        <div className="form">
           <h1> Enter Institution Name: </h1>
            <input onChange={(e)=>setInstitution(e.target.value)}></input>
           <h1> Enter Student Name:</h1>
            <input onChange={(e)=>setName(e.target.value)}></input>
           <h1> Enter Date:</h1>
            <input type="date" onChange={(e)=>setDate(e.target.value)}></input>
            {/* <button onClick={log} >Submit!</button> */}
            <PDF  institution={institution} name={name} date={date} click={click} />
        </div>
        </>
    )
}

export default Form
