import React from "react";
import Point from "./Point";

export default function ServiceDescription({ description }) {
  return (
    <div className=" flex flex-col gap-32">
      {description &&
        description.map((point, index) => (
          <Point
            key={index}
            img={point.url}
            title={point.title}
            heading={point.heading}
            text={point.text}
            right={index % 2 === 1} // true for every second item, false otherwise
          />
        ))}
    </div>
  );
}
