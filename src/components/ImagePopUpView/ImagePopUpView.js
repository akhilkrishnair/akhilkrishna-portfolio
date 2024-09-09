import React from 'react'
import './ImagePopUpView.css'

const ImagePopUpView = ({previewImage,setPreviewImage}) => {
    return (  
        <div 
        style={{position:'fixed',top:'0px',left:'0px',zIndex:"999",width:"100vw",height:"100vh",backgroundColor: "rgba(215, 225, 225, .5)"}} 
        onClick={() => setPreviewImage("")}
        className='image-preview-container'>
            <div className='image-container'>
                <img src={previewImage} alt='preview.jpg' />
            </div>
        </div>
    )
}

export default ImagePopUpView