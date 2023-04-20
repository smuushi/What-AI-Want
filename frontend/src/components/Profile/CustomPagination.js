import React, { useState, useEffect } from "react";
import "./CustomPagination.css";

const CustomPagination = ({ swiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayRange = 2;

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);

  const bullets = swiper?.slides?.map((_, index) => {
    if (
      index >= activeIndex - displayRange &&
      index <= activeIndex + displayRange
    ) {
      return (
        <span
          key={index}
          className={`custom-bullet ${
            index === activeIndex ? "custom-bullet-active" : ""
          }`}
          onClick={() => swiper.slideTo(index)}
        >
          {index + 1}
        </span>
      );
    }
    return null;
  });

  return <div className="custom-pagination">{bullets}</div>;
};

export default CustomPagination;
