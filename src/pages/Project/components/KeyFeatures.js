import React, { useState } from 'react'
import './KeyFeatures.css';
import ScreenShotSlider from './ScreenShotSlider';

const KeyFeatures = ({setPreviewImage,keyFeatures}) => {


    return (
    <div className='each-details-container key-features'>

        <h3> Key Features Implemented: </h3> 
        <ul className='key-features'>
            {keyFeatures.map(kf => (
                <li>
                    <b>{kf.title} : </b>{kf.description}<br/>

                    {kf.screenShots&&
                    <div className='key-features-screenshots-container'>
                        <ScreenShotSlider screenShots={kf.screenShots} />                                        
                    </div>}    
                             
                </li>
            ))}
        </ul>
    </div>
    )
}

export default KeyFeatures