import React from "react";

const Value = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-4">
      <span>
        <div
          className="w-60 h-60 rounded-2xl shadow-2xl bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </span>
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="w-[90%] text-base font-light text-center">{description}</p>
    </div>
  );
};

export default Value;
