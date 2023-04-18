import { useEffect } from "react";

const handleSlideChange = (swiper, swiperClassName) => {
  const activeIndex = swiper.activeIndex;
  const slideTexts = document.querySelectorAll(
    `.${swiperClassName} .slide-text`
  );
  const slideBackgrounds = document.querySelectorAll(
    `.${swiperClassName} .slide-background`
  );
  const cornerImages = document.querySelectorAll(
    `.${swiperClassName} .corner-image`
  );

  slideTexts.forEach((slideText, index) => {
    if (index === activeIndex) {
      slideText.classList.add("active");
    } else {
      slideText.classList.remove("active");
    }
  });

  slideBackgrounds.forEach((slideBackground, index) => {
    if (index === activeIndex) {
      slideBackground.classList.add("active");
    } else {
      slideBackground.classList.remove("active");
    }
  });

  cornerImages.forEach((cornerImage, index) => {
    if (index === activeIndex) {
      cornerImage.classList.add("active");
    } else {
      cornerImage.classList.remove("active");
    }
  });
};

export const useSwiperEffect = (swiperClassName) => {
  useEffect(() => {
    const swiperInstance = document.querySelector(
      `.${swiperClassName}`
    )?.swiper;

    if (!swiperInstance) {
      return;
    }

    swiperInstance.on("slideChange", () =>
      handleSlideChange(swiperInstance, swiperClassName)
    );
    handleSlideChange(swiperInstance, swiperClassName);

    return () => {
      swiperInstance.off("slideChange", () =>
        handleSlideChange(swiperInstance, swiperClassName)
      );
    };
  }, []);
};
