import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
return(
  <>profile</>
)
}


export default Profile;
