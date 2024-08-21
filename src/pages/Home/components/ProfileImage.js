import React from 'react';
import akhil from "assets/images/akhil-vanilla.png";


const ProfileImage = () => {
  return (
        <div className="image-container">
            <img className="image" src={akhil} alt="akhilkrishna.jpg" />
        </div>
  )
}

export default ProfileImage