import React from 'react';

export default function Wrapper({ children, className }) {
  return (
    <>
      <div
        className={`w-full max-w-[100%] py-24 px-4 sm:px-10 md:px-16 lg:px-24 mx-auto poppins-regular ${className || ""}`}
      >
        {children}
      </div>
    </>
  );
}
