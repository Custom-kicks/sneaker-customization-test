"use client";

import React, { useState } from "react";
import {
  Share2Icon,
  BookmarkIcon,
  ChevronRightIcon,
  ResetIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const colors = [
    "#FAD02E", "#FFA500", "#FF4500", "#008080", "#4682B4", "#2E8B57", "#000000",
    "#808080", "#FFFFFF", "#800080", "#FFC0CB", "#A52A2A", "#228B22",
    "#6495ED", "#DC143C", "#FF1493", "#FFD700", "#00CED1", "#ADFF2F",
    "#4682B4", "#D2691E", "#4B0082", "#00FF7F", "#B22222", "#DA70D6", "#F0E68C",
    "#556B2F", "#FF8C00", "#5F9EA0", "#F5DEB3", "#9932CC", "#E9967A", "#C71585",
    "#FF4500", "#8B4513", "#2F4F4F", "#87CEEB", "#90EE90", "#FA8072",
  ];

  const colorsToShow = 13;

  const handleLeftClick = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex - colorsToShow < 0
        ? 0
        : prevIndex - colorsToShow
    );
  };

  const handleRightClick = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex + colorsToShow >= colors.length
        ? colors.length - colorsToShow
        : prevIndex + colorsToShow
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white text-black">
      {/* Header */}
      <div className="flex justify-between items-center px-10 py-4 border-b ">
        <div>
          <h1 className="text-xl font-bold">Nike Dunk Low</h1>
          <p className="text-gray-500 text-sm">$120 (Estimated Price)</p>
        </div>
        <div className="flex items-center space-x-4">
          <Share2Icon className="w-6 h-6 cursor-pointer text-gray-500" />
          <BookmarkIcon className="w-6 h-6 cursor-pointer text-gray-500" />
          <button className="px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600">
            Done
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <div
          className={`relative ${
            isSidebarOpen ? "w-1/6" : "w-10"
          } border-r p-4 flex flex-col items-center transition-all duration-300`}
        >
          {/* Toggle Button */}
          <button
            className="absolute -right-3 bg-gray-400 p-1 rounded-full hover:bg-gray-900"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <ChevronRightIcon
              className={`w-4 h-4 text-white transform ${
                isSidebarOpen ? "rotate-180" : "rotate-0"
              } transition-transform`}
            />
          </button>

          {/* Sidebar Content */}
          {isSidebarOpen && (
            <div className="mt-5 space-y-5 space-x-2">
              <span className="font-semibold text-gray-600 ml-2">
                Recent Designs
              </span>
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-60 h-32 bg-gray-200 flex justify-center items-center text-white rounded-md text-4xl font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Center Section */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400">Customization Canvas (To be added)</p>
        </div>

        {/* Right-side Button Section */}
        <div className="flex flex-col space-y-3 p-5 items-center absolute right-3 top-0 bottom-3">
          {[
            "Vamp",
            "Foxing",
            "Swoosh",
            "Laces",
            "Tip",
            "Backtap",
            "Tongue",
            "Logo",
            "Midsole",
            "Outsole",
            "Quarter",
            "Collar",
            "Shoelery",
            "Eyestay",
          ].map((label) => (
            <button
              key={label}
              className="w-28 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-900 text-sm font-medium text-center font-semibold"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center p-10 border-t space-y-4 bg-gray-100">
        {/* Reset Button */}
        <div className="w-full flex justify-between items-center">
          <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
            Reset
            <ResetIcon className="w-4 h-4 ml-1" />
          </button>

          {/* Row of Buttons */}
          <div className="absolute inset-x-0 flex justify-center">
            <div className="flex space-x-6">
              {["Color", "Pattern", "Textures", "Graphics"].map((label) => (
                <button
                  key={label}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-900 text-sm font-semibold"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Color Palette Carousel */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLeftClick}
          >
            <TriangleLeftIcon className="w-7 h-7" />
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {colors
              .slice(visibleIndex, visibleIndex + colorsToShow)
              .map((color) => (
                <button
                  key={color}
                  className="w-5 h-5 rounded-full border-2"
                  style={{
                    backgroundColor: color,
                    borderColor: color === "#FFFFFF" ? "#000" : "transparent",
                  }}
                ></button>
              ))}
          </div>
          <button
            onClick={handleRightClick}
          >
            <TriangleRightIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;