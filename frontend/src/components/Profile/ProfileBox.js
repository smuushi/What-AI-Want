import { useSelector } from "react-redux";
import "./ProfileBox.css";
import EditUserModal from "../SessionForms/EditUserModal";
import EditAvModal from "../SessionForms/EditAvModal";
import { useState } from "react";
import { useEffect } from "react";

function ProfileBox() {
  const currentUser = useSelector((state) => state.session.user);
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (currentUser && currentUser.profileImage) {
      fetch(`/api/users/profile/${currentUser.profileImage}`)
        .then(async (response) => {
          // const contentType = response.headers.get("Content-Type");
          const blob = await response.blob();
          setImage(URL.createObjectURL(blob));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentUser]);
  let userAvatar
  if (!currentUser?.profileImage){
    userAvatar = <div id = 'userAvatar'>Upload Profile Photo here!</div>
  }else{
    userAvatar = <img alt = '' src={image} />
  }
  return (
    <div className="profile-box-container">
      <span className="profile-image">
        {userAvatar}
      </span>

      <span className="profile-info">
        <EditAvModal />
        <EditUserModal />
        <p id="username">{currentUser?.username}</p>

        <p>{currentUser?.email}</p>
      </span>
    </div>
  );
}

export default ProfileBox;
