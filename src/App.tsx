import React, { useState, useEffect } from "react";
import "./App.css";
import Collections from "./components/Collections/Collections";
import Stories from "./components/Stories/Stories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="p-2.5">
          <h1 className="text-lg font-sans font-bold px-1">Collections</h1>
          <Collections windowWidth={windowWidth} />
        </div>
        <div className="p-2.5">
          <h1 className="text-lg font-sans font-bold px-1">Stories</h1>
          <Stories windowWidth={windowWidth} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
