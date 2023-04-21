import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const About = ({
  flip = true,
  img = "https://cdn.discordapp.com/attachments/1096463008143781951/1097524638646542446/img-LtMfF5kyXN3ha0Jeo8sxhvee.png",
  color = "linear-gradient(141.13deg, #0693E3 3.51%, #27C7FF 100.32%)",
  h1 = "Unlock Your Creativity",
  p = "What-Ai-Want is a platform that allows anyone to easily create their own custom avatar, regardless of their artistic abilities. Using cutting-edge technology, the platform generates unique and highly expressive avatars that showcase each user's individuality",
}) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);
  return flip === true ? (
    <div id="about"
      className="about_wrapper"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      style={{ background: `${color}` }}
    >
      <div
        className="about_image_bg_div"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="about_text_div">
        <div className="about_text">
          <h1>{h1}</h1>
          <p>{p}</p>
        </div>
      </div>
    </div>
  ) : (
    <div id="about"
      className="about_wrapper"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      style={{ background: `${color}` }}
    >
      <div className="about_text_div">
        <div className="about_text">
          <h1>{h1}</h1>
          <p>{p}</p>
        </div>
      </div>
      <div
        className="about_image_bg_div"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default About;
