import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-row">
      <div
        className="px-6 rounded-lg animate-pulse bg-gray-300"
        style={{ width: "320px", height: "566px" }}
      ></div>
      <div
        className="px-6 rounded-lg animate-pulse bg-gray-300"
        style={{ width: "40px", height: "566px", marginLeft: "10px" }}
      ></div>
    </div>
  );
};

export default Loading;
