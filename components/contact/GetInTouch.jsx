import React from "react";
import ContactMethod from "@/components/contact/ContactMethod";

const contactMethods = [
  {
    icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    title: "Call Us",
    link: "tel:+923705664516",
    linkText: "+92 370 5664516",
  },
  {
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6",
    title: "Email Us",
    link: "mailto:info@sigdevs.com",
    linkText: "info@sigdevs.com",
  },
  {
    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    title: "Available",
    link: null,
    linkText: "24/7",
  },
];

export default function GetInTouch() {
  return (
    <div className="flex flex-col justify-center gap-10 p-4 md:p-8">
      <h3 className="text-4xl md:text-6xl font-medium text-center">
        Or Get In Touch
      </h3>
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center gap-8">
        {contactMethods.map((method, index) => (
          <ContactMethod
            key={index}
            icon={method.icon}
            title={method.title}
            link={method.link}
            linkText={method.linkText}
            className={index === 2 ? "col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
}
