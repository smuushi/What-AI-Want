import { useSelector } from "react-redux";

function ProfileBox() {
  const currentUser = useSelector((state) => state.session.user);
  return (
    <div>
      <img />
      <p>{currentUser.username}</p>
      <p>{currentUser.email}</p>
    </div>
  );
}

export default ProfileBox;
