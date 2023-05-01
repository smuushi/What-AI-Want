import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup, clearSessionErrors } from "../../store/session";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
      case "password":
        setState = setPassword;
        break;
      case "password2":
        setState = setPassword2;
        break;
      default:
        throw Error("Unknown field in Signup Form");
    }

    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {

    // if (email === "" || username === "" || password === "") {
    //   dispatch(receiveErrors({email: "can't be blank", username: "can't be blank", password: "can't be blank"}))
    // }

    e.preventDefault();
    const user = {
      email,
      username,
      password,
    };



    dispatch(signup(user));
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up Today!</h2>

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
      <div className="errors">{errors?.password}</div>
      <label>

        <input
          type="password"
          value={password}
          onChange={update("password")}
          placeholder="Password"
        />
      </label>
      <div className="errors">
        {password !== password2 && "Confirm Password field must match"}
      </div>
      <label>
        <input
          type="password"
          value={password2}
          onChange={update("password2")}
          placeholder="Confirm Password"
        />
      </label>
      <input id = "submitSignUp"
        type="submit"
        value="Sign Up" 
      />
    </form>
  );
}

export default SignupForm;
