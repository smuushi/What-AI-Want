import { useEffect, useState, useRef } from "react";
import jwtFetch from "../../store/jwt";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";

const Upload = () => {
  const uploadButton = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [profileImage, setProfileImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setProfileImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("profileImage", profileImage);
    formData.append("userId", currentUser._id);
    console.log("formData", formData);

    const response = await jwtFetch("/api/users/upload", {
      method: "PATCH",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const post = await response.json();
      setProfileImage(null);
    }

    if (!currentUser) {
      return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={uploadButton}
        name="profileImage"
        type="file"
        onChange={handleFile}
      />
      {profileImage && <img src={URL.createObjectURL(profileImage)} />}
      {console.log("profileImage", profileImage)}
      <button>Upload</button>
      {console.log(imageUrl)}
    </form>
  );
};

export default Upload;
