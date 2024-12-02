import React from "react";

const ContactMethod = ({ icon, title, link, linkText }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path d={icon}></path>
      </svg>
      <div className="flex flex-col justify-center items-start">
        <h4 className="text-2xl font-medium">{title}</h4>
        {link ? (
          <a
            href={link}
            className="hover:text-night-blue font-extralight transition-all ease-in-out duration-200"
          >
            <p className="text-lg font-light">{linkText}</p>
          </a>
        ) : (
          <p className="text-lg font-light">{linkText}</p>
        )}
      </div>
    </div>
  );
};

export default ContactMethod;
