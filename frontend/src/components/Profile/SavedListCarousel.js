import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SavedListCarousel.css";
import { Mousewheel, Pagination } from "swiper";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

function splitArray(array, size) {
  const parts = [];
  for (let i = 0; i < array.length; i += size) {
    parts.push(array.slice(i, i + size));
  }
  return parts;
}

export default function SavedListCarousel() {
  const currentUser = useSelector((state) => state.session.user);
  const allListObjects = useSelector((state) => state.lists);
  const userListsIdsArray = currentUser?.lists || [];
  const listObjectsToRender = userListsIdsArray.map((listId) => {
    const listObject = allListObjects[listId];
    return listObject;
  });

  const listObjectsListItems = listObjectsToRender.map((listObject) => {
    return <ListItem prop={listObject} />;
  });

  const splitItems = splitArray(listObjectsListItems, 1);

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
        {splitItems.map((parts) => (
          <SwiperSlide>
            <div className="savedlist-title-box">
              <h1 className="savedlist-title">Saved List</h1>
            </div>
            <div className="savedlist-divider"></div>
            <div className="save-list-content-box">
              <span className="parts">{parts}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
