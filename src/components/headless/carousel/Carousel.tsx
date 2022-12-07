import React from "react";
import { createContext, useContext } from "react";
import { useCarousel } from "./hooks/useCarousel";
import {
  CarouselContextType,
  CarouselItemType,
  CarouselDotType,
  CarouselSlidesContainerType,
  CarouselType,
} from "./types/types";

const CarouselContext = createContext<CarouselContextType | null>(null);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (context === undefined || context === null) {
    throw new Error(
      "useCarouselContext must be used inside a <Carousel></Carousel> fragment !"
    );
  }
  return context;
};

const Carousel = ({ children, slidesCount, ...restProps }: CarouselType) => {
  return (
    <CarouselContext.Provider
      value={{ ...useCarousel(slidesCount), slidesCount }}
    >
      <div data-testid="carousel" {...restProps}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Slide = ({ children, ...restProps }: CarouselItemType) => {
  return (
    <div data-testid="slide" {...restProps}>
      {children}
    </div>
  );
};

Carousel.Dots = ({ children, ...restProps }: CarouselItemType) => {
  return (
    <div data-testid="dots" {...restProps}>
      {children}
    </div>
  );
};

Carousel.LeftArrow = ({ children, ...restProps }: CarouselItemType) => {
  const { prevSlide } = useCarouselContext();
  return (
    <button data-testid="left-arrow" onClick={() => prevSlide()} {...restProps}>
      {children}
    </button>
  );
};

Carousel.RightArrow = ({ children, ...restProps }: CarouselItemType) => {
  const { nextSlide } = useCarouselContext();

  return (
    <button
      data-testid="right-arrow"
      onClick={() => nextSlide()}
      {...restProps}
    >
      {children}
    </button>
  );
};

Carousel.Dot = ({ children, index, ...restProps }: CarouselDotType) => {
  const { goToSlide } = useCarouselContext();

  return (
    <button
      data-testid="dot"
      onClick={() => {
        goToSlide(index);
      }}
      {...restProps}
    >
      {children}
    </button>
  );
};

Carousel.SlidesContainer = ({
  children,
  wrapperWidth,
  nextSlideTransitionWidth,
  ...restProps
}: CarouselSlidesContainerType) => {
  const { slideIndex, slidesCount } = useCarouselContext();

  return (
    <div
      data-testid="slides-wrapper"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        width: wrapperWidth + "px",
      }}
    >
      <div
        data-testid="slides-container"
        style={{
          width: `${slidesCount * nextSlideTransitionWidth}px`,
          transform: `translateX(-${slideIndex * nextSlideTransitionWidth}px)`,
          transition: "transform ease-out 0.3s",
          display: "flex",
        }}
        {...restProps}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
