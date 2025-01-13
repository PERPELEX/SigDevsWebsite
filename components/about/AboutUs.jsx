import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-4 md:p-8">
      <h2 className="text-4xl md:text-6xl font-medium">About Us</h2>
      <p className="w-full md:w-[75%] lg:w-[50%] text-base md:text-xl font-light text-center">
        At SigDevs, we are pioneers in providing bespoke digital solutions,
        guiding businesses through the labyrinth of technology to achieve
        success. With over 12 years of experience under our belt, we have carved
        a niche for ourselves in the digital realm, expanding our services
        across 9 countries and working with 10 Fortune 500 clients.
      </p>
    </div>
  );
}
