import React from "react";
import Carousel from "../headless/carousel/Carousel";
import { useCollections } from "../../queries/useCollections";
import CollectionsCarousel from "./CollectionsCarousel";
import Loading from "./Loading";

const Collections = () => {
  const { status, data } = useCollections();

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
          <CollectionsCarousel data={data.data} />
        </Carousel>
      )}
    </>
  );
};

export default Collections;
