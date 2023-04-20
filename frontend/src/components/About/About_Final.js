
import About from "./About";


const FinalAbout = () => {
  return (
    <>
      <About />
      <About
        flip={false}
        img="https://cdn.discordapp.com/attachments/1096463008143781951/1098444206499971103/1681934057539testimage3.png"
        color="#eb9353"
        h1="Express Yourself!"
        p="Using the latest in image generation technology, the OpenAI API, What-Ai-Want is able to take these user preferences and generate a unique and personalized avatar in real-time. The avatars are not only customizable but also highly expressive and detailed, allowing users to truly showcase their individuality"
      />
    </>
  );
};

export default FinalAbout;
