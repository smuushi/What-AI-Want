import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {clearSessionErrors,updateCurrentUser } from "../../store/session";

const EditUserForm = (props)=>{
    const currentUser = useSelector((state) => state.session.user);

    const [email, setEmail] = useState(currentUser.email);
    const [username, setUsername] = useState(currentUser.username);
    const errors = useSelector((state) => state.errors.session);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
          dispatch(clearSessionErrors());
        };
      }, [dispatch]);

      const update = (field) => {
        let setState;
    
        switch (field) {
          case "email":
            setState = setEmail;
            break;
          case "username":
            setState = setUsername;
            break;
          default:
            throw Error("Unknown field in Signup Form");
        }
    
        return (e) => setState(e.currentTarget.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const user = {...currentUser,email,username};
        dispatch(updateCurrentUser(user)).then(()=>{props.setShowModal(false)}).catch(() => {
          console.log("hi. i love to just take up space on the console.. hehe")
        });
      };

      let emailInput;
      if (currentUser._id === "643fe8ace00313f56f1588a2"){
        emailInput = <div id = 'nullDemoEmail'>Can't Change Demo  Email!</div>
      }else{
        emailInput = <label>
        <div>
           Email 
        </div>
         <input
         type="text"
         value={email}
         onChange={update("email")}
         placeholder="Email"
         />
     </label>
      }
     return (
         <form className="signup-form" onSubmit={handleSubmit}>
         <h2>Edit your info!</h2>
         <div className="errors">{errors?.email}</div>
         {emailInput}
         <div className="errors">{errors?.username}</div>
         <label>
            <div>
              Username
            </div>
             <input
             type="text"
             value={username}
             onChange={update("username")}
             placeholder="Username"
             />
         </label>
         <input id = "submitSignUp"
             type="submit"
             value="Update"
             disabled={!email || !username}
         />
         </form>
     );

}

export default EditUserForm
