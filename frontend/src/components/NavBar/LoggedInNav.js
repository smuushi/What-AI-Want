import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./LoggedInNav.css";

function LoggedInNav() {
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="loggedin-nav-box">
    
        <Logo />
  

      <div className="links-nav">
        <NavLink to="/" isActive={() => location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/maike">M<span>AI</span>ke</NavLink>
        <NavLink to="/profile">Profile</NavLink>
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
