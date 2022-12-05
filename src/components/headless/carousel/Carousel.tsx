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

const Carousel = ({ children, dataLength, ...restProps }: CarouselType) => {
  return (
    <CarouselContext.Provider
      value={{ ...useCarousel(dataLength), dataLength }}
    >
      <div {...restProps}>{children}</div>
    </CarouselContext.Provider>
  );
};

Carousel.Slide = ({ children, ...restProps }: CarouselItemType) => {
  return <div {...restProps}>{children}</div>;
};

Carousel.Dots = ({ children, ...restProps }: CarouselItemType) => {
  return <div {...restProps}>{children}</div>;
};

Carousel.LeftArrow = ({ children, ...restProps }: CarouselItemType) => {
  const { prevSlide } = useCarouselContext();

  return (
    <button onClick={() => prevSlide()} {...restProps}>
      {children}
    </button>
  );
};

Carousel.RightArrow = ({ children, ...restProps }: CarouselItemType) => {
  const { nextSlide } = useCarouselContext();

  return (
    <button onClick={() => nextSlide()} {...restProps}>
      {children}
    </button>
  );
};

Carousel.Dot = ({ children, index, ...restProps }: CarouselDotType) => {
  const { goToSlide } = useCarouselContext();

  return (
    <button
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
  const { slideIndex, dataLength } = useCarouselContext();

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        width: wrapperWidth + "px",
      }}
    >
      <div
        style={{
          width: `${dataLength * nextSlideTransitionWidth}px`,
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
