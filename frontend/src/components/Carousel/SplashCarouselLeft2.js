import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

import { useDispatch } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import { useSwiperEffect } from "./CarouselUtils";
import { fetchRandomImages } from "../../store/images";

export default function SplashCarouselLeft2() {
  useSwiperEffect("mySwiper2");
  const [sampleImages, setSampleImages] = useState([]);
  console.log(sampleImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomImages()).then((data) => {
      const images = data.images.map((image) => {
        return image.tempUrl;
      });
      setSampleImages(() => images);
    });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper2"
      >
        {sampleImages.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-background slide-background-${index + 1}`}>
              <img className="corner-image" src={imageUrl} />
              <div className="slide-text">Save Your Avatar!</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
