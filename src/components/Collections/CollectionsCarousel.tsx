import React from "react";
import Carousel, { useCarouselContext } from "../headless/carousel/Carousel";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

type CollectionSlideType = {
  cover_image_url: string;
};

type CollectionsCarouselPropsType = {
  data: CollectionSlideType[];
  windowWidth: number;
};

const CollectionsCarousel = ({
  data,
  windowWidth,
}: CollectionsCarouselPropsType) => {
  const { slideIndex } = useCarouselContext();

  return (
    <>
      <Carousel.Dots className="top-3 absolute z-50 left-3">
        {data.map((slideDots: CollectionSlideType, index: number) => (
          <Carousel.Dot
            index={index}
            key={index}
            style={{
              backgroundColor: slideIndex === index ? "black" : "white",
            }}
            className="w-2.5 h-2.5 rounded-full mx-1 border border-black"
          />
        ))}
      </Carousel.Dots>
      {slideIndex !== 0 && (
        <Carousel.LeftArrow className="absolute left-1 z-50 inset-y-0 opacity-50 hover:opacity-100 my-10">
          <BsFillArrowLeftCircleFill size="40" />
        </Carousel.LeftArrow>
      )}
      <Carousel.SlidesContainer
        wrapperWidth={windowWidth < 380 ? windowWidth : 380}
        nextSlideTransitionWidth={windowWidth < 380 ? windowWidth - 30 : 330}
      >
        {data.map((slide: CollectionSlideType, index: number) => (
          <Carousel.Slide
            className="w-80 h-auto mr-2.5"
            index={index}
            key={index}
            style={{
              width: windowWidth < 380 ? windowWidth - 30 + "px" : "320px",
            }}
          >
            <img
              className="w-auto rounded-lg"
              src={slide["cover_image_url"]}
              alt="title"
            />
          </Carousel.Slide>
        ))}
      </Carousel.SlidesContainer>
      <Carousel.RightArrow className="absolute right-1 z-50 inset-y-0 opacity-60 hover:opacity-100 my-10">
        <BsFillArrowRightCircleFill size="40" />
      </Carousel.RightArrow>
    </>
  );
};

export default CollectionsCarousel;
