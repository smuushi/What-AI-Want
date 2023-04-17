import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import topBg from "./topslide.jpg";
import dalleTemp from "./dalletemp.jpg";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function SplashCarouselLeft() {
  const slides = [
    {
      backgroundImage: topBg,
      cornerImage: dalleTemp,
    },
    {
      backgroundImage: topBg,
      cornerImage: dalleTemp,
    },
    {
      backgroundImage: topBg,
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
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <img className="corner-image" src={slide.cornerImage} />
              <div className="slide-text">What</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
