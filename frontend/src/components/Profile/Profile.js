import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserLists } from "../../store/lists";
import { getCurrentUser } from "../../store/session";
import ProfileBox from "./ProfileBox";
import SavedListCarousel from "./SavedListCarousel";
import { Collection } from "./Collection";
import "./Profile.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (!currentUser?.images) {
      dispatch(getCurrentUser());

    }
    dispatch(fetchUserLists(currentUser?._id));
  }, [dispatch,currentUser]);

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  

  return (
    <div className="profile-main-box">
      <div data-aos="zoom-out-up" className="profile-left-box">
        <ProfileBox />
        <SavedListCarousel />
      </div>
      <div data-aos="zoom-out-down" className="profile-right-box">
        <Collection currentUserId={currentUser?._id}/>
      </div>
    </div>
  );
}

export default Profile;
