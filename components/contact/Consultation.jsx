import React from "react";

export default function Consultation() {
  return (
    <div className=" flex flex-col justify-center items-center gap-6">
      <h2 className="text-6xl font-medium">Get A Free Consultation</h2>
      <p className="text-xl font-light">
        Arrange an Online meeting with us to get a free Consultation
      </p>
      <button className="text-lg font-medium px-4 py-2 border-2 bg-sig-blue border-sig-blue text-white rounded-xl hover:bg-graphite hover:text-night-blue hover:border-night-blue transition-all ease-in-out duration-200">
        Schedule Consultation
      </button>
    </div>
  );
}
