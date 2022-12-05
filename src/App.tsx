import React from "react";
import "./App.css";
import Collections from "./components/Collections/Collections";
import Stories from "./components/Stories/Stories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="p-2.5">
          <h1 className="text-lg font-sans font-bold px-1">Collections</h1>
          <Collections />
        </div>
        <div className="p-2.5">
          <h1 className="text-lg font-sans font-bold px-1">Stories</h1>
          <Stories />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
