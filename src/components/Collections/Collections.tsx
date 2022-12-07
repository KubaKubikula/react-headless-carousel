import React from "react";
import Carousel from "../headless/carousel/Carousel";
import { useCollections } from "../../queries/useCollections";
import CollectionsCarousel from "./CollectionsCarousel";
import Loading from "./Loading";

type CollectionsPropsType = {
  windowWidth: number;
};

const Collections = ({ windowWidth }: CollectionsPropsType) => {
  const { status, data } = useCollections();

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <span>Error loading Collections</span>
      ) : (
        <Carousel
          slidesCount={data.data.length}
          className="flex flex-row relative"
          style={{ width: windowWidth < 380 ? windowWidth + "px" : "380px" }}
        >
          <CollectionsCarousel windowWidth={windowWidth} data={data.data} />
        </Carousel>
      )}
    </>
  );
};

export default Collections;
