import React from 'react'
import './PDF.css'
import Pdf from 'react-to-pdf'
const ref=React.createRef()
const PDF = (props) => {
    const { institution,name,date,click}=props
    return (
        
        <>
      {
          click ?  (
        <div className="Post" ref={ref} >
        <h1 className="name">  {name}</h1>
        <h1 className="institution"> {institution}</h1>
        <h1 className="date">  {date}</h1>
        
        </div>): (<div></div>) }
        <Pdf targetRef={ref} filename="post.pdf">
            {({toPdf})=><button onClick={toPdf}>Capture as PDF!</button>}

        </Pdf>
          </>  
        
    )
}

export default PDF
