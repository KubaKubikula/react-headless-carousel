# react-headless-carousel

-- Basic usage --
-----------------

 - There are also Carousel.Dots and Carousel.Dot in carousel (check Collections in components how to use it)
 - styling is tailwind, also possible to put style tag on all of elements :-)

<img width="551" alt="Screenshot 2022-12-06 at 18 43 54" src="https://user-images.githubusercontent.com/3868751/205984109-08b97641-1786-4230-86bf-88faebceef38.png">


```javascript
import React from "react";
import Carousel, { useCarouselContext } from "../headless/carousel/Carousel";

const LeftArrow = () => {
  const { slideIndex } = useCarouselContext();  ## inside <Carousel> frament you can get { slideIndex, nextSlide, prevSlide, gotoSlide } from context
  if (slideIndex === 0) {
    return <></>;
  }
  return (
    <Carousel.LeftArrow className="absolute left-1 z-50 inset-y-0 opacity-60 hover:opacity-100">
      Left
    </Carousel.LeftArrow>
  );
};

const Stories = () => {
  return (
        <Carousel
          slideCount={10}                                   ## total count of your slides
          className="flex flex-row relative"
          style={{ width: "380px" }}
        >
          <LeftArrow />
          <Carousel.SlidesContainer
            wrapperWidth={380}                              ## width of your carousel
            nextSlideTransitionWidth={340}                  ## how much you wanna move when hit next slide
          >
            {data.map((slide: any, index: number) => (
              <Carousel.Slide
                index={index}                               ## This is important to know for sliding
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
              Right 
          </Carousel.RightArrow>
        </Carousel>
      )}
  );
};
```
