import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import dalleTemp from "./dalletemp.jpg";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function SplashCarouselLeft2() {
  const slides = [
    {
      background:
        "linear-gradient(308deg, rgba(6,147,227,0.8) 0%, rgba(0,212,255,0.8) 100%)",
      cornerImage: dalleTemp,
    },
    {
      background:
        "linear-gradient(308deg, rgba(6,147,227,0.8) 0%, rgba(0,212,255,0.8) 100%)",
      cornerImage: dalleTemp,
    },
    {
      background:
        "linear-gradient(308deg, rgba(6,147,227,0.8) 0%, rgba(0,212,255,0.8) 100%)",
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
              style={{ background: slide.background }}
            >
              <img className="corner-image" src={slide.cornerImage} />
              <div className="slide-text">Want</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
