import React from "react";
import Form from "@/components/contact/Form";

export default function DirectContact() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex- flex-col justify-center items-start gap-4">
        <h3 className="text-5xl font-medium">Contact Us</h3>
        <p className="text-lg font-extralight tracking-widest">
          We would love to speak with you!
        </p>
      </div>
      <Form className="w-[60%]" />
    </div>
  );
}
