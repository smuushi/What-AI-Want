import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {clearSessionErrors,updateCurrentUser } from "../../store/session";

const EditUserForm = ()=>{
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
        dispatch(updateCurrentUser(user));
      };

     return (
         <form className="signup-form" onSubmit={handleSubmit}>
         <h2>Edit your info!</h2>
     
         <div className="errors">{errors?.email}</div>
         <label>
     
             <input
             type="text"
             value={email}
             onChange={update("email")}
             placeholder="Email"
             />
         </label>
         <div className="errors">{errors?.username}</div>
         <label>
         
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