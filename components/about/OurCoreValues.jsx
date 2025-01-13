import React from "react";
import Value from "@/components/about/Value";

const coreValues = [
  {
    image: "inovation.jpg",
    title: "Innovation",
    description:
      "Constantly pushing the boundaries to offer creative and forward-thinking solutions.",
  },
  {
    image: "adaptability.jpg",
    title: "Adaptability",
    description:
      "Evolving with the dynamic tech landscape to address the unique challenges of our clients.",
  },
  {
    image: "reliability.jpg",
    title: "Reliability",
    description:
      "Building lasting relationships through trust, commitment, and delivering on promises.",
  },
  {
    image: "excellence.jpg",
    title: "Excellence",
    description:
      "Upholding the highest standards of quality and efficiency in every project we undertake.",
  },
];

export default function OurCoreValues() {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h2 className="text-4xl md:text-6xl font-medium">Our Core Values</h2>
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center">
        {coreValues.map((value, index) => (
          <Value
            key={index}
            image={value.image}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
}
