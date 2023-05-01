import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./LoggedInNav.css";

function LoggedInNav() {
  const dispatch = useDispatch();
  const location = useLocation();



  const handleClick = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="loggedin-nav-box">

        <Logo />


      <div className="links-nav">
        <NavLink onClick={handleClick} to="/" isActive={() => location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/maike">M<span>AI</span>ke</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
     <div id = "logoutButton" onClick={logoutUser}>Logout <i className="fa-solid fa-arrow-right-from-bracket"></i> </div>
    </div>
  );
}

export default LoggedInNav;
