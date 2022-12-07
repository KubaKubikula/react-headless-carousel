import { describe, it, expect } from "vitest";
import { render, screen, renderHook, fireEvent } from "@testing-library/react";
import Carousel, { useCarouselContext } from "./Carousel";

describe("Rendering", () => {
  it("should be possible to render a Carousel without crashing", () => {
    render(
      <Carousel slidesCount={3}>
        <Carousel.Dots>
          <Carousel.Dot key={0} index={0}>
            1
          </Carousel.Dot>
          <Carousel.Dot key={1} index={1}>
            2
          </Carousel.Dot>
          <Carousel.Dot key={2} index={2}>
            3
          </Carousel.Dot>
        </Carousel.Dots>
        <Carousel.LeftArrow>left</Carousel.LeftArrow>
        <Carousel.SlidesContainer
          wrapperWidth={300}
          nextSlideTransitionWidth={300}
        >
          <Carousel.Slide style={{ width: "300px" }}>1</Carousel.Slide>
          <Carousel.Slide style={{ width: "300px" }}>2</Carousel.Slide>
          <Carousel.Slide style={{ width: "300px" }}>3</Carousel.Slide>
        </Carousel.SlidesContainer>
        <Carousel.RightArrow>right</Carousel.RightArrow>
      </Carousel>
    );
  });

  it("should be possible to render a Carousel with a custom className", () => {
    render(
      <Carousel slidesCount={3} className="test">
        <Carousel.Dots className="test">
          <Carousel.Dot className="test" key={0} index={0}>
            1
          </Carousel.Dot>
          <Carousel.Dot className="test" key={1} index={1}>
            2
          </Carousel.Dot>
          <Carousel.Dot className="test" key={2} index={2}>
            3
          </Carousel.Dot>
        </Carousel.Dots>
        <Carousel.LeftArrow className="test">left</Carousel.LeftArrow>
        <Carousel.SlidesContainer
          wrapperWidth={300}
          nextSlideTransitionWidth={300}
          className="test"
        >
          <Carousel.Slide className="test" style={{ width: "300px" }}>
            1
          </Carousel.Slide>
          <Carousel.Slide className="test" style={{ width: "300px" }}>
            2
          </Carousel.Slide>
          <Carousel.Slide className="test" style={{ width: "300px" }}>
            3
          </Carousel.Slide>
        </Carousel.SlidesContainer>
        <Carousel.RightArrow className="test">right</Carousel.RightArrow>
      </Carousel>
    );

    expect(screen.getByTestId("carousel")).toHaveClass("test");
    expect(screen.getByTestId("slides-container")).toHaveClass("test");
    screen.queryAllByTestId("slide").forEach((slide) => {
      expect(slide).toHaveClass("test");
    });
    expect(screen.getByTestId("dots")).toHaveClass("test");
    screen.queryAllByTestId("dot").forEach((dot) => {
      expect(dot).toHaveClass("test");
    });
    expect(screen.getByTestId("left-arrow")).toHaveClass("test");
    expect(screen.getByTestId("right-arrow")).toHaveClass("test");
  });

  it("should be possible to render a Carousel with a custom style", () => {
    render(
      <Carousel slidesCount={3} style={{ width: "300px" }}>
        <Carousel.Dots style={{ width: "10px" }}>
          <Carousel.Dot style={{ width: "10px" }} key={0} index={0}>
            1
          </Carousel.Dot>
          <Carousel.Dot style={{ width: "10px" }} key={1} index={1}>
            2
          </Carousel.Dot>
          <Carousel.Dot style={{ width: "10px" }} key={2} index={2}>
            3
          </Carousel.Dot>
        </Carousel.Dots>
        <Carousel.LeftArrow style={{ width: "300px" }}>left</Carousel.LeftArrow>
        <Carousel.SlidesContainer
          wrapperWidth={300}
          nextSlideTransitionWidth={300}
          style={{ width: "300px" }}
        >
          <Carousel.Slide style={{ width: "300px" }}>1</Carousel.Slide>
          <Carousel.Slide style={{ width: "300px" }}>2</Carousel.Slide>
          <Carousel.Slide style={{ width: "300px" }}>3</Carousel.Slide>
        </Carousel.SlidesContainer>
        <Carousel.RightArrow style={{ width: "300px" }}>
          right
        </Carousel.RightArrow>
      </Carousel>
    );

    expect(screen.getByTestId("carousel")).toHaveStyle("width: 300px");
    expect(screen.getByTestId("slides-container")).toHaveStyle("width: 300px");
    expect(screen.getByTestId("dots")).toHaveStyle("width: 10px");

    screen.queryAllByTestId("dot").forEach((dot) => {
      expect(dot).toHaveStyle("width: 10px");
    });
    screen.queryAllByTestId("slide").forEach((dot) => {
      expect(dot).toHaveStyle("width: 300px");
    });

    expect(screen.getByTestId("left-arrow")).toHaveStyle("width: 300px");
    expect(screen.getByTestId("right-arrow")).toHaveStyle("width: 300px");
  });
});
