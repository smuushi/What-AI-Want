import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselRight.css";
import dalleTemp from "./dalletemp.jpg";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function SplashCarouselRight() {
  const slides = [
    {
      background:
        "linear-gradient(308deg, rgba(0,212,255,0.8) 0%,rgba(6,147,227,0.8) 100%)",
      cornerImage: dalleTemp,
    },
    {
      background:
        "linear-gradient(308deg, rgba(0,212,255,0.8) 0%, rgba(6,147,227,0.8) 100%)",
      cornerImage: dalleTemp,
    },
    {
      background:
        "linear-gradient(308deg, rgba(0,212,255,0.8) 0%, rgba(6,147,227,0.8) 100%)",
      cornerImage: dalleTemp,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiperRight"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-background-right"
              style={{ background: slide.background }}
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
