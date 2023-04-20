import { useSelector } from "react-redux";
import "./ProfileBox.css";
import profileTemp from "./temp.png";
import EditUserModal from "../SessionForms/EditUserModal";
import EditAvModal from "../SessionForms/EditAvModal";

function ProfileBox() {
  const currentUser = useSelector((state) => state.session.user);
  return (
    <div className="profile-box-container">
    {/* <button id = 'editPhotoButton'>
    <i className="fa-solid fa-camera-retro"></i>
    </button> */}
    {/* <button id = 'editUserButton'>
    Edit
    </button> */}
    <EditAvModal/>
    <EditUserModal/>
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
