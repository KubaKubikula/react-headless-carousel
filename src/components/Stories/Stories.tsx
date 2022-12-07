import React from "react";
import { useStories } from "../../queries/useStories";
import Carousel, { useCarouselContext } from "../headless/carousel/Carousel";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Loading from "./Loading";

type StoriesPropType = {
  windowWidth: number;
};

type SlideStoryType = {
  story: {
    item: {
      cover_src: string;
    };
  };
};

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

const Stories = ({ windowWidth }: StoriesPropType) => {
  const { status, data } = useStories();

  function getCarouselWidth(): number {
    return windowWidth < 380 ? windowWidth : 380;
  }

  function getNextSlideTransitionWidth(): number {
    return windowWidth < 380 ? (windowWidth / 2 - 30) * 2 + 20 : 340;
  }

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <span>Error loading Stories</span>
      ) : (
        <Carousel
          slidesCount={data.data.length}
          className="flex flex-row relative"
          style={{ width: getCarouselWidth() + "px" }}
        >
          <LeftArrow />
          <Carousel.SlidesContainer
            wrapperWidth={getCarouselWidth()}
            nextSlideTransitionWidth={getNextSlideTransitionWidth()}
          >
            {data.data.map((slide: SlideStoryType, index: number) => (
              <Carousel.Slide
                index={index}
                key={index}
                className="mr-2.5"
                style={{
                  width:
                    windowWidth < 380 ? windowWidth / 2 - 30 + "px" : "160px",
                  height:
                    windowWidth < 380 ? windowWidth / 2 - 30 + "px" : "160px",
                }}
              >
                <img
                  className="rounded-full w-full h-full"
                  src={slide.story.item.cover_src}
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
