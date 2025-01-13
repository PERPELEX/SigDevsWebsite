import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Point({ img, title, heading, text, right = false }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        right ? "md:flex-row-reverse" : "md:flex-row"
      } justify-start items-center gap-8 md:gap-32`}
    >
      <span>
        <div
          className="w-96 h-64 md:w-72 md:h-72 rounded-2xl shadow-2xl bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </span>

      <div className="w-full md:w-auto flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <span className="flex flex-col gap-2 text-center">
          <h4 className="text-lg md:text-xl tracking-wide font-semibold">
            {heading}
          </h4>
          <p className="text-base md:text-lg">{text}</p>
        </span>
      </div>
    </div>
  );
}
