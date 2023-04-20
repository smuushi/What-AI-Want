import { useSelector } from "react-redux";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import "./NavBar.css";

const NavIndex = () => {
  const loggedIn = useSelector((state) => !!state.session.user);
  let navComponent;
  if (loggedIn) {
    navComponent = <LoggedInNav />;
  } else {
    navComponent = <LoggedOutNav />;
  }
  return (
    <div id="navbar-container">
      <div className="fullNavBox">{navComponent}</div>
    </div>
  );
};

export default NavIndex;
