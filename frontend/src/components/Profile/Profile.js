import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserLists } from "../../store/lists";
import { getCurrentUser } from "../../store/session";
import ProfileBox from "./ProfileBox";
import { Collection } from "./Collection";
import { fetchUserImages } from "../../store/images";

function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(fetchUserLists(currentUser?._id));
    dispatch(getCurrentUser());
    dispatch(fetchUserImages(currentUser?._id))
  }, []);

  return (
    <>
      <div>
        <ProfileBox />
      </div>

      <div>
        <Collection />
      </div>
    </>
  );
}

export default Profile;
