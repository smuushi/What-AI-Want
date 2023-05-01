import Intro from "./Intro/Intro";
import About from "./About/About";
import Team from "./Team/Team";
import SplashCarouselLeft from "./Carousel/SplashCarouselLeft";
import SplashCarouselRight from "./Carousel/SplashCarouselRight";
import SplashCarouselLeft2 from "./Carousel/SplashCarouselLeft2";

const SplashExample = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Intro />
      <About />
      <About
        flip={false}
        img="https://cdn.discordapp.com/attachments/1096463008143781951/1098444206499971103/1681934057539testimage3.png"
        color="#eb9353"
        h1="Express Yourself!"
        p="Using the latest in image generation technology, the OpenAI API, What-Ai-Want is able to take these user preferences and generate a unique and personalized avatar in real-time. The avatars are not only customizable but also highly expressive and detailed, allowing users to truly showcase their individuality"
      />
      <SplashCarouselLeft
        time={5000}
        heading="Pick Your Preferences!"
        flip={true}
      />
      <SplashCarouselLeft time={6000} heading="Pick Your Image!" flip={false} />
      <SplashCarouselLeft time={7000} heading="Save Your Avatar!" flip={true} />
      <Team />
    </div>
  );
};

export default SplashExample;
