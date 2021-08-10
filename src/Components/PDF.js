import React from 'react'
import './PDF.css'
import Pdf from 'react-to-pdf'
const ref=React.createRef()
const PDF = (props) => {
    const { institution,name,date,click}=props
    return (
        
        <>
      
          
        <div className="Post" ref={ref} >
    
        <div className="name">  {name}</div>
        <div className="institution"> {institution}</div>
        <div className="date">  {date}</div>
       
        
        </div>
        <Pdf targetRef={ref} filename="certificate.pdf">
            {({toPdf})=><button onClick={toPdf}>Capture as PDF!</button>}

        </Pdf>
          </>  
        
    )
}

export default PDF
