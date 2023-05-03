import "./team.css";
import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const Team = () => {

 useEffect(() => {
   AOS.init({
     once: false,
   });
   AOS.refresh();
 }, []);

  return (
    <div className="team_container" data-aos="fade-up" >
      <h1 data-aos="fade-up" className="team_heading" >Meet Our Team</h1>
      <div className="team_wrapper">
        <TeamMemberCard person={"Michael Shih"} />
        <TeamMemberCard person={"Kaiter Wu"} />
        <TeamMemberCard person={"Sara Ryu"} />
        <TeamMemberCard person={"Tim Dong"} />
      </div>
    </div>
  );
};

export default Team;



const TeamMemberCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [timerId, setTimerId] = useState(null);

  let gravatar;
  let description;
  let github;
  let avatar;
  let linkedin;
  switch (props.person) {
    case "Sara Ryu":
      gravatar =
        "https://secure.gravatar.com/avatar/ef5b46abccd6f6789bb2672bc91beada?secure=true&size=300";
      description = "Backend/Flex";
      avatar =
        "https://cdn.discordapp.com/attachments/1096463008143781951/1098416485891850301/1681940666248testimage2.png";
      github = "https://github.com/useNavigate";
      linkedin = "https://www.linkedin.com/in/sara-ryu-798165261/";
      break;
    case "Kaiter Wu":
      gravatar =
        "https://secure.gravatar.com/avatar/1ff452cb3a2b20a3189c8879a6233e76?secure=true&size=300";
      description = "Frontend Lead";
      avatar =
        "https://cdn.discordapp.com/attachments/1070167591387136031/1098430398641479741/1681956583753testimage3.png";
      github = "https://github.com/kaiterwu";
      linkedin = "https://www.linkedin.com/in/kaiter-wu-7ba70a62/";
      break;
    case "Tim Dong":
      gravatar =
        "https://secure.gravatar.com/avatar/69fcea611c648b1f4f2d78e093a9b8e0?secure=true&size=300";
      description = "Frontend/Flex";
      avatar =
        "https://cdn.discordapp.com/attachments/1096463008143781951/1097738088903614506/DALLE_2023-04-18_00.15.42_-_detailed_Anime_Key_Visual_of_a_woman_official_media_trending_on_twitter_high_quality_long_pink_haired_in_a_frilly_maid_uniform.png";
      github = "https://github.com/Tysuiku";
      linkedin = "https://www.linkedin.com/in/timothy-dong-19a700254/";
      break;
    case "Michael Shih":
      gravatar =
        "https://cdn.discordapp.com/attachments/1068678911178850456/1070045360380186634/SNOW_20230131_131713_013.jpg";
      description = "Backend Lead";
      avatar =
        "https://cdn.discordapp.com/attachments/1096463008143781951/1098642554146279556/sorta_me.jpeg";
      github = "https://github.com/smuushi";
      linkedin = "https://www.linkedin.com/in/michael-shih-2422a1127/";
      break;

      default:
        return
  }

  const handleMouseOver = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    setTimerId(setTimeout(() => setIsHovered(true), 200));
  };
  const handleMouseOut = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    setTimerId(setTimeout(() => setIsHovered(false), 200));
  };
  return (
    <div className="teamMemberCard_wrapper" data-aos="fade-up">
      <div
        className="teamMember_image "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}

        style=
        {{
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
          transition:"ease-in 0.35s",
          backgroundImage: isHovered ? `url(${avatar})` : `url(${gravatar})`,
        }}>
      </div>
      <div className="teamMember_">
        <h1>{props.person}</h1>
        <p>{description}</p>
        <div className="teamMember_logos">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
