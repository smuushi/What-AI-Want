import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserLists } from "../../store/lists";
import { getCurrentUser } from "../../store/session";
import ProfileBox from "./ProfileBox";
import SavedListCarousel from "./SavedListCarousel";

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
      <SavedListCarousel />
    </div>
  );
}

export default Profile;
