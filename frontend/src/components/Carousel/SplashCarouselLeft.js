import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import dalleTemp from "./dalletemp.jpg";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { useSwiperEffect } from "./CarouselUtils";

export default function SplashCarouselLeft() {
  useSwiperEffect("mySwiper1");

  const slides = [
    {
      cornerImage: dalleTemp,
    },
    {
      cornerImage: dalleTemp,
    },
    {
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
        className="mySwiper1"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-background slide-background-${index + 1}`}>
              <img className="corner-image" src={slide.cornerImage} />
              <div className="slide-text">Pick Your Preferences!</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
