import React from "react";

const ContactMethod = ({ icon, title, link, linkText, className }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center gap-4 p-4 md:p-6 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <path d={icon}></path>
      </svg>
      <div className="flex flex-col justify-center items-start">
        <h4 className="text-xl md:text-2xl font-medium">{title}</h4>
        {link ? (
          <span
            href={link}
            className="hover:text-night-blue font-extralight transition-all ease-in-out duration-200"
          >
            <p className="text-base md:text-lg font-light">{linkText}</p>
          </span>
        ) : (
          <p className="text-base md:text-lg font-light">{linkText}</p>
        )}
      </div>
    </div>
  );
};

export default ContactMethod;
