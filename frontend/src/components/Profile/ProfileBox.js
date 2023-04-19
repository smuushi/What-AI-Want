import { useSelector } from "react-redux";
import "./ProfileBox.css";
import profileTemp from "./temp.png";

function ProfileBox() {
  const currentUser = useSelector((state) => state.session.user);
  return (
    <div className="profile-box-container">
      <span className="profile-image">
        <img src={profileTemp} />
        <div className="profile-underline"></div>
      </span>

      <span className="profile-info">
        <p id="username">{currentUser?.username}</p>
        <div className="profile-underline"></div>
        <p>{currentUser?.email}</p>
      </span>
    </div>
  );
}

export default ProfileBox;
