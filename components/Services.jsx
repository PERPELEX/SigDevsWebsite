import React from "react";
import Heading from "@/components/Heading";
import Service from "@/components/Service";

const ServicesData = [
  {
    img: "/web1.jpg",
    name: "Website Development",
    heading:
      "Build Stunning Websites That Engage, Inspire, and Elevate Your Brand!",
    text: "At SigDevs, we specialize in full-stack development services. We deliver interactive frontends, efficient backends, and fast APIs. Let us create the perfect web solution tailored to your business needs.",
    url: "/Web",
    right: false,
  },
  {
    img: "/ai1.jpg",
    name: "AI Models & Solutions",
    heading:
      "Unlock Intelligent Solutions with Cutting-Edge AI to Drive Business Innovation!",
    text: "At SigDevs, we specialize in delivering advanced Artificial Intelligence solutions. From automating tasks to making data-driven decisions, we leverage AI to unlock new opportunities for your business. Let us help you stay ahead of the competition with intelligent systems that boost efficiency and innovation.",
    url: "/AI",
    right: true,
  },
  {
    img: "/app1.jpg",
    name: "App Development",
    heading:
      "Create Innovative, User-Friendly Apps That Engage and Drive Business Growth!",
    text: "At SigDevs, we specialize in delivering innovative app development solutions. From crafting intuitive user interfaces to ensuring smooth functionality, we build apps that meet your business needs. Let us help you create seamless, engaging, and high-performance apps that drive success across platforms.",
    url: "App",
    right: false,
  },
  {
    img: "/ds1.jpg",
    name: "Data Science Solutions",
    heading:
      "Unlock Insights, Drive Growth, and Transform Decisions with Data Science Solutions!",
    text: "At SigDevs, we specialize in delivering cutting-edge Data Science solutions. From insightful data analysis to predictive modelling, we turn data into actionable strategies. Let us empower your business with data-driven decisions and growth.",
    url: "DSS",
    right: true,
  },
];

export default function Services() {
  return (
    <div id="services" className="w-[100%] h-auto bg-graphite ">
      <Heading text="Our Services" className="text-white text-center mb-24" />
      <div className="flex flex-col  gap-32">
        {ServicesData.map((serviceData, index) => (
          <Service
            key={index}
            img={serviceData.img}
            name={serviceData.name}
            heading={serviceData.heading}
            text={serviceData.text}
            url={serviceData.url}
            right={serviceData.right}
          />
        ))}
      </div>
    </div>
  );
}
