import './ProfileImage.css';
import profileImage from "assets/images/profile/akhil-krishna-vanilla.png";

const ProfileImage = () => {
  return (
        <div className="image-container">
            <img className="image" src={profileImage} alt="akhilkrishna.jpg" />
        </div>
  )
}

export default ProfileImage