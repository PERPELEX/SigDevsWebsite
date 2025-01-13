import React from "react";
import Form from "@/components/contact/Form";

export default function DirectContact() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-4xl md:text-5xl font-medium">Contact Us</h3>
        <p className="text-base md:text-lg font-extralight tracking-widest">
          We would love to speak with you!
        </p>
      </div>
      <Form className="w-full md:w-[60%]" />
    </div>
  );
}
