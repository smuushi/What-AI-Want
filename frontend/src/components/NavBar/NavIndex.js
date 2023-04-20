import { useSelector } from "react-redux";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import "./NavBar.css";
import logoImage from "./testinglogo.png";

const NavIndex = () => {
  const loggedIn = useSelector((state) => !!state.session.user);
  let navComponent;
  if (loggedIn) {
    navComponent = <LoggedInNav />;
  } else {
    navComponent = <LoggedOutNav />;
  }
  return (
    <div className="navindex-pos-box">
      <div id="navbar-container">
        <div className="fullNavBox">{navComponent}</div>
      </div>
    </div>
  );
};

export default NavIndex;
