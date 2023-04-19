import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserLists } from "../../store/lists";
import { getCurrentUser } from "../../store/session";
import ProfileBox from "./ProfileBox";

function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(fetchUserLists(currentUser?._id));
    dispatch(getCurrentUser());
  }, []);

  return (
    <div>
      <ProfileBox />
    </div>
  );
}

export default Profile;
