import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-row">
      <div
        className="px-6 py-4 mb-4 rounded-full animate-pulse bg-gray-300"
        style={{ width: "160px", height: "160px" }}
      ></div>
      <div
        className="px-6 py-4 mb-4 rounded-full animate-pulse bg-gray-300"
        style={{ width: "160px", height: "160px", marginLeft: "10px" }}
      ></div>
      <div
        className="px-6 py-4 mb-4 rounded-full animate-pulse bg-gray-300 rounded-r-sm"
        style={{ width: "40px", height: "160px", marginLeft: "10px" }}
      ></div>
    </div>
  );
};

export default Loading;
