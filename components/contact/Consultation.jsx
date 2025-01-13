import React from "react";

export default function Consultation() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-4 md:p-8">
      <h2 className="text-4xl md:text-6xl font-medium text-center">
        Get A Free Consultation
      </h2>
      <p className="text-base md:text-xl font-light text-center">
        Arrange an Online meeting with us to get a free Consultation
      </p>
      <button className="text-base md:text-lg font-medium px-4 py-2 border-2 bg-sig-blue border-sig-blue text-white rounded-xl hover:bg-graphite hover:text-night-blue hover:border-night-blue transition-all ease-in-out duration-200">
        Schedule Consultation
      </button>
    </div>
  );
}
