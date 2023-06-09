import "./intro.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SignInUpModal from "../NavBar/SignInUpModal";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import Coin from "./Coin";

const Intro = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const loggedIn = useSelector((state) => !!state.session.user);
  const handleScroll = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({email:"admin@gmail.com",password:"password"}));
  }


  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);


  let buttons;
  if (!loggedIn) {
    buttons = (
      <>
        <SignInUpModal page={"splash"} />
        <div className="intro_button learn" onClick={handleScroll}>
          Learn More
        </div>
        <div onClick={handleClick} className="intro_button">Demo Login</div>
      </>
    );
  } else {
    buttons = (
      <>
        <div onClick={() => history.push("/maike")} className="intro_button">
          Let's M<span style={{ color: "#ffb347", opacity: "100%" }}>AI</span>
          ke!
        </div>
        <div className="intro_button learn" onClick={handleScroll}>
          Learn More
        </div>
      </>
    );
  }

  let url1 =
    "https://cdn.discordapp.com/attachments/952591530626023464/1098640310684373022/1681961040669testimage0.png";
  let url2 =
    "https://cdn.discordapp.com/attachments/1096463008143781951/1097647313553477692/img-S5oQSB6K9IQBVJ52EUrm61IF.png";

  let url3 =
    "https://cdn.discordapp.com/attachments/952591530626023464/1098640362802794617/1681947212867testimage2.png";
  let url4 =
    "https://cdn.discordapp.com/attachments/952591530626023464/1098635373292290203/1681939204993testimage2.png";

  return (
    <div className="intro_wrapper" data-aos="fade-up">
      <div className="intro_text" data-aos="fade-down">
        <h1 className="intro_header">Express Your</h1>
        <h1 className="intro_header sub">
          M<span>AI</span>ke!
        </h1>
        <p>
          Create your own custom character with just a few clicks and show off
          your unique style with <span>What-Ai-Want</span>'s advanced image
          generation technology.
        </p>
        <div className="intro_button_div">{buttons}</div>
      </div>

      <div className="intro_image" data-aos="fade-down">
        <Coin url1={url1} url2={url2} cn="top" />
        <Coin url1={url3} url2={url4} cn="bottom" />
      </div>
    </div>
  );
};

export default Intro;
