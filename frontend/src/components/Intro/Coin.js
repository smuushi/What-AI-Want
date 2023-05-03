import { useState } from "react";

const Coin = ({url1,url2,cn}) => {
  const [isHoveredTop, setIsHoveredTop] = useState(false);
  const [timerIdTop, setTimerIdTop] = useState(null);
  const handleMouseOverTop = () => {
    if (timerIdTop) {
      clearTimeout(timerIdTop);
    }
    setTimerIdTop(setTimeout(() => setIsHoveredTop(true), 200));
  };
  const handleMouseOutTop = () => {
    if (timerIdTop) {
      clearTimeout(timerIdTop);
    }
    setTimerIdTop(setTimeout(() => setIsHoveredTop(false), 200));
  };
  return (
    <div
      className={`intro_circle ${cn}`}
      data-aos="fade-down"
      onMouseOver={handleMouseOverTop}
      onMouseOut={handleMouseOutTop}
      style={{
        transform: isHoveredTop ? "rotateY(180deg)" : "rotateY(0deg)",
        backgroundImage: isHoveredTop
          ? `url(${url1})`
          : `url(${url2})`
      }}
    ></div>
  );
};

export default Coin
