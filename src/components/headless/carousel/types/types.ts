import React, { ReactNode } from "react";

export type CarouselContextType = {
  slideIndex: number;
  prevSlide: () => void;
  nextSlide: () => void;
  goToSlide: (index: number) => void;
  slidesCount: number;
};

export type CarouselItemType = {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  index?: number;
};

export type CarouselDotType = {
  children?: ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  index: number;
  key: number;
};

export type CarouselSlidesContainerType = {
  children: ReactNode | ReactNode[];
  wrapperWidth: number;
  nextSlideTransitionWidth: number;
  className?: string;
  style?: React.CSSProperties;
};

export type CarouselType = {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  slidesCount: number;
};
