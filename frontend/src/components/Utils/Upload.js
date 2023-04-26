import { useEffect, useState, useRef } from "react";
import jwtFetch from "../../store/jwt";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";
import { receiveCurrentUser } from "../../store/session";
import './upload.css'

const Upload = (props) => {
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

  const uploadButton = useRef();
  const dispatch = useDispatch();

  const [profileImage, setProfileImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState("");

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setProfileImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // setImageUrl(reader.result);
    };
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("profileImage", profileImage);
    formData.append("userId", currentUser._id);
   

    const response = await jwtFetch("/api/users/upload", {
      method: "PATCH",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setProfileImage(null);
      dispatch(receiveCurrentUser(data.user))
      props.setShowModal(false)
    }

    if (!currentUser) {
      return null;
    }
  };

  let showImage;
  if (profileImage){
    showImage = URL.createObjectURL(profileImage)
  }else{
    showImage = image
  }


  return (
    <form id = 'editPhotoContainer' onSubmit={handleSubmit}>
    <div id = 'profilePhotobox'>
      <img alt = '' src={showImage} />
    </div>
        <div id = 'editProfilePhotoB'>
        <label id = 'showProfilePhotoB'>
          Change Photo
          <input
              id = 'profilePhotoButton'
              ref={uploadButton}
              name="profileImage"
              type="file"
              onChange={handleFile}
          />
        </label>
          <button id ='uploadButton'>Upload</button>
        </div>

    </form>
  );
};

export default Upload;
