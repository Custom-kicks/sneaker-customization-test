"use client";

import React, { useState } from "react";
import {
  LinkNone1Icon,
  DownloadIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

const BottomNavbar = ({ onClose }: { onClose: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [designName, setDesignName] = useState("Customised Nike Dunk Low");

  const handleClose = () => {
    setIsExiting(true); // Trigger exit animation
    setTimeout(() => {
      onClose(); 
    }, 300); 
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-6 flex flex-col items-center z-50 h-96 transition-transform duration-300 ${
        isExiting ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      {/* Close Icon */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
      >
        <Cross2Icon className="w-6 h-6" />
      </button>

      {/* Content Section */}
      <div className="flex w-3/4 h-full">
        {/* Sneaker Preview */}
        <div className="w-1/2 h-full bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Sneaker Preview</span>
        </div>

        {/* Design Details & Buttons */}
        <div className="w-1/2 flex flex-col pl-6">
          {/* Design Name Input */}
          <h2 className="text-2xl font-semibold">Share Your Design</h2>
          <span className="text-lg mb-5">Nike Dunk Low</span>
          <label className="text-gray-500 text-sm mb-1">Design Name</label>
          <input
            type="text"
            value={designName}
            onChange={(e) => setDesignName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 mb-4"
          />

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 mt-2">
            <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md">
              Copy
              <LinkNone1Icon className="w-5 h-5 ml-10" />
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md">
              Save
              <DownloadIcon className="w-5 h-5 ml-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;