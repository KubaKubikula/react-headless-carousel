import React from "react";
import { useStories } from "../../queries/useStories";
import Carousel, { useCarouselContext } from "../headless/carousel/Carousel";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Loading from "./Loading";

const LeftArrow = () => {
  const { slideIndex } = useCarouselContext();
  if (slideIndex === 0) {
    return <></>;
  }
  return (
    <Carousel.LeftArrow className="absolute left-1 z-50 inset-y-0 opacity-60 hover:opacity-100">
      <BsFillArrowLeftCircleFill size="40" />
    </Carousel.LeftArrow>
  );
};

const Stories = () => {
  const { status, data } = useStories();

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <span>Error</span>
      ) : (
        <Carousel
          dataLength={data.data.length}
          className="flex flex-row relative"
          style={{ width: "380px" }}
        >
          <LeftArrow />
          <Carousel.SlidesContainer
            wrapperWidth={380}
            nextSlideTransitionWidth={340}
          >
            {data.data.map((slide: any, index: number) => (
              <Carousel.Slide
                index={index}
                key={index}
                className="w-40 h-40 mr-2.5"
              >
                <img
                  className="rounded-full w-40 h-40"
                  src={slide.story.item.cover_src}
                  alt="test"
                />
              </Carousel.Slide>
            ))}
          </Carousel.SlidesContainer>
          <Carousel.RightArrow className="absolute right-1 z-50 inset-y-0 opacity-60 hover:opacity-100">
            <BsFillArrowRightCircleFill size="40" />
          </Carousel.RightArrow>
        </Carousel>
      )}
    </>
  );
};

export default Stories;
