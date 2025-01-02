"use client";

import React, { useState } from "react";
import {
  Share2Icon,
  BookmarkIcon,
  BookmarkFilledIcon,
  ChevronRightIcon,
  ResetIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";

// Importing data
import { colors } from "./data/colors";
import { rightSideButtons } from "./data/rightSideButtons";
import BottomNavbar from "@/components/BottomNavbar";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const colorsToShow = 13; // Number of visible colors

  // Carousel Navigation Logic
  const handleLeftClick = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex - colorsToShow < 0
        ? colors.length - colorsToShow
        : prevIndex - colorsToShow
    );
  };

  const handleRightClick = () => {
    setVisibleIndex((prevIndex) =>
      (prevIndex + colorsToShow) % colors.length
    );
  };

  return (
    <div
      className={`flex flex-col h-screen bg-white text-black transition-all duration-300 ${
        isNavbarOpen ? "backdrop-blur-sm" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-10 py-4 border-b">
        <div>
          <h1 className="text-xl font-bold">Nike Dunk Low</h1>
          <p className="text-gray-500 text-sm">$120 (Estimated Price)</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Share Icon */}
          <Share2Icon
            className="w-6 h-6 cursor-pointer text-gray-500"
            onClick={toggleNavbar}
          />
          {/* Bookmark Icon */}
          {isBookmarked ? (
            <BookmarkFilledIcon
              className="w-6 h-6 cursor-pointer text-gray-900"
              onClick={toggleBookmark}
            />
          ) : (
            <BookmarkIcon
              className="w-6 h-6 cursor-pointer text-gray-500"
              onClick={toggleBookmark}
            />
          )}
          <button className="px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600">
            Done
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
      {isNavbarOpen && (
        <BottomNavbar
          onClose={() =>
            setIsNavbarOpen(false)
          }
        />
      )}

      {/* Main Section */}
      <div className={`flex flex-1 relative ${isNavbarOpen ? "backdrop-blur-sm" : ""}`}>
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
          {rightSideButtons.map((label) => (
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
          <button onClick={handleLeftClick} className="p-2">
            <TriangleLeftIcon className="w-7 h-7" />
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {colors
              .slice(visibleIndex, visibleIndex + colorsToShow)
              .map((color, index) => (
                <button
                  key={`${color}-${index}`}
                  className="w-5 h-5 rounded-full border-2"
                  style={{
                    backgroundColor: color,
                    borderColor: color === "#FFFFFF" ? "#000" : "transparent",
                  }}
                ></button>
              ))}
          </div>
          <button onClick={handleRightClick} className="p-2">
            <TriangleRightIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;