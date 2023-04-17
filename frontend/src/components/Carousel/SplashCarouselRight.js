import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselRight.css";
import midBg from "./midslide.jpg";
import dalleTemp from "./dalletemp.jpg";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function SplashCarouselRight() {
  const slides = [
    {
      backgroundImage: midBg,
      cornerImage: dalleTemp,
    },
    {
      backgroundImage: midBg,
      cornerImage: dalleTemp,
    },
    {
      backgroundImage: midBg,
      cornerImage: dalleTemp,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiperRight"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-background-right"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <img className="corner-image-right" src={slide.cornerImage} />
              <div className="slide-text-right">AI</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
