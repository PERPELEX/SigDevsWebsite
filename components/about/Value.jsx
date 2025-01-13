import React from "react";

const Value = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 p-4 md:p-8">
      <span>
        <div
          className="w-40 h-40 md:w-60 md:h-60 rounded-2xl shadow-2xl bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </span>
      <h3 className="text-xl md:text-2xl font-medium text-center">{title}</h3>
      <p className="w-full md:w-[90%] text-base md:text-lg font-light text-center">
        {description}
      </p>
    </div>
  );
};

export default Value;
