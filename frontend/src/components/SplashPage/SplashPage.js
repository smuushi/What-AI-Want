import SplashCarouselLeft from "../Carousel/SplashCarouselLeft";
import SplashCarouselRight from "../Carousel/SplashCarouselRight";
import SplashCarouselLeft2 from "../Carousel/SplashCarouselLeft2";
import "./SplashPage.css";
import About from "../About/About";

function SplashPage() {
  return (
    <div className="SplashPageBox">
      <SplashCarouselLeft />
      <SplashCarouselRight />
      <SplashCarouselLeft2 />
    </div>
  );
}

export default SplashPage;
