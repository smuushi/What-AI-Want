import React from "react";
import "./Logo.css";
import logoImage from "./testinglogo.png";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory()
  return (
    <div onClick={()=>{history.push('/')}} className="what-ai-want-logo">
        <p id="what-ai-logo">What</p>
        <div id ='circleLogoContainer'
          style={{ backgroundImage: `url(${logoImage})` }}>
          <img src={logoImage} alt="Logo" />
          <p id="AI-logo">AI</p>
        </div>
        <p id="want-ai-logo">Want</p>
    </div>
  );
};

export default Logo;
