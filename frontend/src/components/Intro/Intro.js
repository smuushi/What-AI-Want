import "./intro.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

const handleScroll=()=>{
const about = document.getElementById("about");
if(about){
    about.scrollIntoView({behavior:"smooth"})
}
}
  return (
    <div className="intro_wrapper" data-aos="fade-up">
      <div className="intro_text" data-aos="fade-down">
        <h1 className="intro_header">Express Your</h1>
        <h1 className="intro_header sub">Maike</h1>
        <p>
          Create your own custom character with just a few clicks and show off
          your unique style with <span>What-Ai-Want</span>'s advanced image
          generation technology.
        </p>
        <div className="intro_button_div">
            <div className="intro_button">Join Now</div>
            <div className="intro_button learn" onClick={handleScroll}>Learn More</div>
        </div>
      </div>

      <div className="intro_image" data-aos="fade-down">
        <div
          className="intro_circle top"
          data-aos="fade-down"
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "rotateY(180deg)";
            e.currentTarget.style.backgroundImage =
              "url(https://cdn.discordapp.com/attachments/952591530626023464/1098640310684373022/1681961040669testimage0.png)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "rotateY(0deg)";
            e.currentTarget.style.backgroundImage = `url(https://cdn.discordapp.com/attachments/1096463008143781951/1097647313553477692/img-S5oQSB6K9IQBVJ52EUrm61IF.png)`;
          }}
        ></div>
        <div
          className="intro_circle bottom"
          data-aos="fade-down"
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "rotateY(180deg)";
            e.currentTarget.style.backgroundImage =
              "url(https://cdn.discordapp.com/attachments/952591530626023464/1098635373292290203/1681939204993testimage2.png)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "rotateY(0deg)";
            e.currentTarget.style.backgroundImage = `url(https://cdn.discordapp.com/attachments/952591530626023464/1098640362802794617/1681947212867testimage2.png)`;
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
