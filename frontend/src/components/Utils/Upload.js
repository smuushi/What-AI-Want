import {useState, useRef } from "react";

const Upload = () => {
    const uploadButton= useRef()

   const [profileImage, setProfileImage] = useState(null);

   const handleFile = ({ currentTarget }) => {
     const file = currentTarget.files[0];
     setProfileImage(file);
   };


 const handleSubmit = async (e) => {
   e.preventDefault();
   const formData = new FormData();


 if (profileImage) {
   formData.append("user[profileImage]", profileImage);
 }
//    const response = await fetchMethod(`/api/user/profileImage${myReview.id}`, {
//      method: "PATCH",
//      body: formData,
//    });

//    if (response.ok) {
//      const post = await response.json();
//      setProfileImage(null);
//    }
 };


  return (
    <div>
      <input
        ref={uploadButton}
        type="file"
        onChange={handleFile}
        name="review[images][]"
      />
      {console.log(profileImage)}
      {profileImage && <img src={URL.createObjectURL(profileImage)} />}
      <button>Upload</button>
    </div>
  );
};

export default Upload;
