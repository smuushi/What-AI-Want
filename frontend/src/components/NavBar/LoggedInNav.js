import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./LoggedInNav.css";

function LoggedInNav() {
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="loggedin-nav-box">
      <div className="links-nav">
        <Link to="/profile">Profile</Link>
        <Link to="/home">Home</Link>
        <Link to="/maike">MAIke</Link>
      </div>

      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <i className="fa-solid fa-bars"></i>
        </button>

        {dropdownVisible && (
          <div className="dropdown-menu">
            <div className="profileButtonDropdown">
              <button className="profileButtonDropdownItem">
                <Link to="/profile">Profile</Link>
              </button>
              <button
                onClick={logoutUser}
                className="profileButtonDropdownItem"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div> 
  );
}

export default LoggedInNav;
