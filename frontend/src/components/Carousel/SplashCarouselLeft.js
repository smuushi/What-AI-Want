import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

import { useDispatch } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import { useSwiperEffect } from "./CarouselUtils";
import { fetchRandomImages } from "../../store/images";

export default function SplashCarouselLeft() {
  useSwiperEffect("mySwiper1");
  const [sampleImages, setSampleImages] = useState([]);
  const [imagesFetched, setImagesFetched] = useState(false);
  console.log(sampleImages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!imagesFetched) {
      dispatch(fetchRandomImages()).then((data) => {
        const images = data.images.map((image) => {
          return image.tempUrl;
        });
        setSampleImages(() => images);
        setImagesFetched(() => true);
      });
    }
  }, []);

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
        {sampleImages.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-background slide-background-${index + 1}`}>
              <img className="corner-image" src={imageUrl} />
              <div className="slide-text">Pick Your Preferences!</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
