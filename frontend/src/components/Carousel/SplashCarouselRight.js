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
// import { useSwiperEffect } from "./CarouselUtils";

export default function SplashCarouselRight() {
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    const slideTexts = document.querySelectorAll(".slide-text-right");
    const cornerImages = document.querySelectorAll(".corner-image-right");
    const slideBackgrounds = document.querySelectorAll(
      ".slide-background-right"
    );

    slideTexts.forEach((slideText, index) => {
      if (index === activeIndex) {
        slideText.classList.add("active");
      } else {
        slideText.classList.remove("active");
      }
    });

    cornerImages.forEach((cornerImage, index) => {
      if (index === activeIndex) {
        cornerImage.classList.add("active");
      } else {
        cornerImage.classList.remove("active");
      }
    });

    slideBackgrounds.forEach((slideBackground, index) => {
      if (index === activeIndex) {
        slideBackground.classList.add("active");
      } else {
        slideBackground.classList.remove("active");
      }
    });
  };

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
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiperRight"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-background-right slide-background-right-${
                index + 1
              }`}
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
