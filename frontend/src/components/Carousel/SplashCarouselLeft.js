import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";

import { useDispatch } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import { useSwiperEffect } from "./CarouselUtils";
import { fetchRandomImages } from "../../store/images";

export default function SplashCarouselLeft({ time, heading, flip }) {
  useSwiperEffect("mySwiper1");
  const [sampleImages, setSampleImages] = useState([]);
  const [imagesFetched, setImagesFetched] = useState(false);
  // console.log(sampleImages);
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
          delay: time,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper1"
      >
        {sampleImages.map((imageUrl, index) => (
          <SwiperSlide key={imageUrl + index}>
            <div
              className="slide-background slide-background"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "contain",
                backgroundPosition: flip ? "left top" : "right top",
                fontFamily: "lato",
                fontSize: "6rem",
              }}
            >
              <div
                className={flip ? "slide-text" : "slide-text_right"}
                style={{
                  color: flip ? "#25c7ff" : "#fcb480",
                  fontFamily: "lato",
                  fontSize: "6rem",
                }}
              >
                {heading}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
