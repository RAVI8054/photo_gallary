import React from "react";
import AboutTabs from "./components/AboutTabs";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f1114] text-white flex justify-end items-center px-16">
      {/* Left half empty (for laptop view) */}
      <div className="hidden md:block w-1/2"></div>

      {/* Right widgets container */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <AboutTabs />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
