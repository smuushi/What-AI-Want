import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselRight.css";
import { useDispatch } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import { fetchRandomImages } from "../../store/images";

export default function SplashCarouselRight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sampleImages, setSampleImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomImages()).then((data) => {
      const images = data.images.map((image) => {
        return image.tempUrl;
      });
      setSampleImages(() => images);
    });
  }, [dispatch]);

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
      {sampleImages.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <div
            className={`slide-background-right slide-background-right-${
              index + 1
            }`}
          >
            <img alt = "" className="corner-image-right" src={imageUrl} />
            <div className="slide-text-right">Pick Your Image!</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
