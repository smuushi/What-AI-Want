import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SavedListCarousel.css";
import { Mousewheel, Pagination } from "swiper";

export default function SavedListCarousel() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="save-list-content-box">
            <span className="underlinedText">Slide 1</span>
            <span className="underlinedText">Slide 2</span>
            <span className="underlinedText">Slide 3</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="save-list-content-box">
            <span className="underlinedText">Slide 4</span>
            <span className="underlinedText">Slide 5</span>
            <span className="underlinedText">Slide 6</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="save-list-content-box">
            <span className="underlinedText">Slide 7</span>
            <span className="underlinedText">Slide 8</span>
            <span className="underlinedText">Slide 9</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
