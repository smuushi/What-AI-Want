import "./Logo.css";
import logoImage from "./testinglogo.png";

const Logo = () => {
  return (
    <div className="what-ai-want-logo">
      <p id="what-ai-logo">What</p>
      <img src={logoImage} />
      <p id="AI-logo">AI</p>
      <p id="want-ai-logo">Want</p>
    </div>
  );
};

export default Logo;
