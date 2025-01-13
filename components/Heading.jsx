import React from "react";

export default function Heading({ className = "", text }) {
  return (
    <div
      className={`w-full flex flex-row justify-center items-center gap-4 md:gap-6 ${className}`}
    >
      <div className="w-12 md:w-20 h-2 md:h-3 bg-sig-blue rounded-[2px] shadow-2xl"></div>
      <h2 className="text-center text-3xl md:text-5xl font-bold md:tracking-wider drop-shadow-2xl">
        {text}
      </h2>
      <div className="w-12 md:w-20 h-2 md:h-3 bg-sig-blue rounded-[2px] shadow-2xl"></div>
    </div>
  );
}
