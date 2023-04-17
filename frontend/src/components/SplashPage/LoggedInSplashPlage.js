import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

function LoggedInSplashPage() {
  const dispatch = useDispatch()
  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
       <button onClick={logoutUser}>Logout</button>
      <h1>LoggedIn</h1>
      <p>What-AI-Want</p>
      <footer>Copyright &copy; 2022 What-AI-Want</footer>
    </>
  );
}

export default LoggedInSplashPage;
