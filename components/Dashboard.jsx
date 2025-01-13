import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="bg-graphite p-10 md:p-20 flex flex-col md:flex-row justify-between items-center noto border-b-2 border-gray-700">
      {/* right */}
      <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 md:gap-8">
        <h1 className="w-full md:w-[90%] text-4xl md:text-7xl font-semibold">
          Code Your Vision into Reality;
        </h1>
        <p className="text-lg md:text-xl font-extralight">
          At SigDevs, we craft customized software solutions that empower
          businesses to thrive. From cutting-edge AI to full-scale software
          development and IT services, we design strategies tailored to your
          unique goals. Our expertise drives innovation, streamlines operations,
          and ensures success in an ever-evolving digital landscape.
        </p>
        <Link href="">
          <button className="border-2 border-sig-blue rounded-2xl p-2 md:p-4 text-lg md:text-xl font-semibold bg-sig-blue text-white hover:bg-graphite hover:text-night-blue hover:border-night-blue transition-all ease-in-out duration-200">
            Schedule a Free Consultation
          </button>
        </Link>
      </div>

      {/* left */}
      <div className="w-full flex justify-center md:w-auto mt-8 md:mt-0">
        <Image src="/dash.png" width={400} height={400} alt="dashboardPic" />
      </div>
    </div>
  );
}
