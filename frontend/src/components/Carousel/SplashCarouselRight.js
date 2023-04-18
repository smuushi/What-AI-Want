import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselRight.css";
import dalleTemp from "./dalletemp.jpg";
import { Autoplay, Navigation } from "swiper";

export default function SplashCarouselRight() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
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
  }, [activeIndex]);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiperRight"
      onSlideChange={(swiper) => handleSlideChange(swiper)}
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
  );
}
