import React from "react";

export default function ServiceHeading({ title, heading, text }) {
  return (
    <div className="bg-graphite flex flex-col justify-between items-center gap-10 border-b-2 border-gray-700 py-20 md:py-40 px-4 md:px-8">
      <h2 className="text-4xl md:text-6xl font-semibold text-center">
        {title}
      </h2>
      <span className="flex flex-col justify-center items-center gap-4 md:gap-6">
        <h3 className="text-xl md:text-2xl font-bold tracking-wide text-center">
          {heading}
        </h3>
        <p className="text-base md:text-xl font-light w-full md:w-[80%] text-center">
          {text}
        </p>
      </span>
    </div>
  );
}
