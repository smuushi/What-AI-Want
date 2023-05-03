import { useSelector } from "react-redux";
import { useState, useEffect } from "react";


function UserProfile() {
  const user = useSelector((state) => state.session.user);
  const [image, setImage] = useState(null);
useEffect(() => {
  if (user && user.profileImage) {
    fetch(`/api/users/profile/${user.profileImage}`)
      .then(async (response) => {
        const contentType = response.headers.get("Content-Type");
        const blob = await response.blob();
        setImage(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}, [user]);





  return (
    <div>
      <h1>User Profile</h1>
      <div>
        {image ? (
          <img src={image} alt="Profile" />

        ) : (
          <p>No profile image available</p>
        )}
      </div>
      {// console.log(image)}
    </div>
  );
}

export default UserProfile;
