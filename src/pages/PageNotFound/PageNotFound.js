import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'

const PageNotFound = () => {

  const pageNotFoundStyle = {
	height:'60vh',
	display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
    lineHeight:'30px'
  }

  return (
    <div style={pageNotFoundStyle} >
        <FaRegQuestionCircle color='blue' size={55}/>
        <h2 style={{color:'blue',marginBottom:'20px',marginTop:'10px'}} >PageNotFound</h2>
        <p>Couldn't find the page that you're looking for!</p>
        <p>Please check the address and try again.</p>
    </div>
  )
}

export default PageNotFound