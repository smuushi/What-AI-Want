import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SavedListCarousel.css";
import { Mousewheel, Pagination } from "swiper";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import CustomPagination from "./CustomPagination";

function splitArray(array, size) {
  const parts = [];
  for (let i = 0; i < array.length; i += size) {
    parts.push(array.slice(i, i + size));
  }
  return parts;
}

export default function SavedListCarousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const currentUser = useSelector((state) => state.session.user);
  const allListObjects = useSelector((state) => state.lists);
  let userListsIdsArray = currentUser?.lists || [];
  const listObjectsToRender = userListsIdsArray.map((listId) => {
    const listObject = allListObjects[listId];
    return listObject;
  });

  const listObjectsListItems = listObjectsToRender.map((listObject) => {
    return (
      <ListItem key={JSON.stringify(listObject + "10399")} prop={listObject} />
    );
  });

  const splitItems = splitArray(listObjectsListItems, 1);
  let listDisplay;
  if (splitItems.length) {
    listDisplay = splitItems.map((parts, idx) => (
      <SwiperSlide key={idx}>
        <div className="savedlist-title-box">
          <h1 className="savedlist-title">Saved AI Images</h1>
        </div>
        <div className="savedlist-divider"></div>
        <div className="save-list-content-box">
          <span className="parts">{parts}</span>
        </div>
      </SwiperSlide>
    )).reverse();
  } else {
    listDisplay = (
      <SwiperSlide>
        <div id="emptyList"> Saved Preferences go here!</div>
      </SwiperSlide>
    );
  }

  const scrollToTop = () => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  };

  const scrollToBottom = () => {
    if (swiperInstance) {
      swiperInstance.slideTo(swiperInstance.slides.length - 1);
    }
  };

  return (
    <>
      <div className="swiper-container">
        <Swiper
          key={"928488181818"}
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="mySwiper"
        >
          {listDisplay}
        </Swiper>
        <div className="custom-scrollbar">
          <div className="scroll-arrow scroll-top" onClick={scrollToTop}>
            Newest
          </div>
          <div className="scroll-arrow scroll-bottom" onClick={scrollToBottom}>
            Oldest
          </div>
        </div>
        <div className="pagination-container">
          <CustomPagination key={"sl082ls"} swiper={swiperInstance} />
        </div>
      </div>
    </>
  );
}
