import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
// import "./SessionForm.css";

import { login, clearSessionErrors } from "../../store/session";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((state) => state.errors.session);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === "email" ? setEmail : setPassword;
    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({email:"admin@gmail.com",password:"password"}));
  }

  if (sessionUser) return <Redirect to = '/'/>

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div className="errors">{errors?.email}</div>
      <label>
        <input
          type="text"
          value={email}
          onChange={update("email")}
          placeholder="Email"
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
      <input id = 'submitLogin' type="submit" value="Go!" disabled={!email || !password} />
      <button onClick={handleClick}>Demo Login</button>
    </form>
  );
}

export default LoginForm;
