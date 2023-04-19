import "./about.css";

const About = ({
  flip = true,
  img = "https://cdn.discordapp.com/attachments/1096880087372157048/1097975404804984882/2_.png",
  color = "#9b51e0",
  h1 = "Unleash Your Creativity",
  p = "What-Ai-Want is a platform that allows anyone to easily create their own custom avatar, regardless of their artistic abilities. Using cutting-edge technology, the platform generates unique and highly expressive avatars that showcase each user's individuality",
}) => {
  return flip === true ? (
    <div className="about_wrapper" style={{ background: `${color}` }}>
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
    <div className="about_wrapper" style={{ background: `${color}` }}>
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
