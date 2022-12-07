import React, { useState } from "react";

export function useCarousel(slidesCount: number) {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const nextSlide = () => {
    if (slideIndex === slidesCount - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slidesCount - 1);
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
