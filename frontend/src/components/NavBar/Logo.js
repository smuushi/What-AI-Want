import React from "react";
import "./Logo.css";
import logoImage from "./testinglogo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="what-ai-want-logo">
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <p id="what-ai-logo">What</p>
      </NavLink>
      <NavLink to="/home">
        <img src={logoImage} alt="Logo" />
      </NavLink>
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <p id="AI-logo">AI</p>
      </NavLink>
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <p id="want-ai-logo">Want</p>
      </NavLink>
    </div>
  );
};

export default Logo;
