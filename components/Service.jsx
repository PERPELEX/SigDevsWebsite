import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service({
  img,
  name,
  heading,
  text,
  url = "",
  right = false,
}) {
  return (
    <div
      className={`flex ${
        right ? "flex-row-reverse" : "flex-row"
      }  justify-start items-center gap-32`}
    >
      <span className="-[30%] hover:scale-110 transition-all ease-in-out duration-200">
        <Link href={url}>
          <div
            className="w-72 h-72 rounded-2xl shadow-2xl bg-cover bg-center flex flex-col justify-end"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </Link>
      </span>
      <div className="w-auto flex flex-col justify-center items-start gap-4">
        <h3 className=" text-3xl font-semibold ">{name}</h3>
        <span className=" flex flex-col gap-2">
          <p className="text-lg font-semibold tracking-wider">{heading}</p>
          <p className="">{text}</p>
        </span>
        <Link href={url}>
          <button className="border-2 p-2 px-4 rounded-xl hover:border-night-blue hover:text-night-blue transition-all ease-in-out duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
