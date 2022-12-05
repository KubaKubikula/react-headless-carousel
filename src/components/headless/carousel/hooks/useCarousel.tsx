import React, { useState } from "react";

export function useCarousel(dataLength: number) {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const nextSlide = () => {
    if (slideIndex === dataLength - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(dataLength - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return {
    slideIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
