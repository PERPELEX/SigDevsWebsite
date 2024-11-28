import React from "react"
import Heading from "@/components/Heading"
import Service from "@/components/Service"

const ServicesData = [
    {
        img: "/web1.jpg",
        name: "Website Development",
        text: "We create responsive and visually appealing websites that drive engagement and conversions. Our team ensures your online presence is both functional and attractive. From e-commerce platforms to personal blogs, we tailor each website to meet your specific needs. Our development process includes thorough testing and optimization to ensure a seamless user experience across all devices. Trust us to bring your vision to life with a website that stands out in the digital landscape.",
        url: "",
        right: false,
    },
    {
        img: "/ai1.jpg",
        name: "AI Models & Solutions",
        text: "Harness the power of artificial intelligence with our custom AI models and solutions. We help businesses automate processes and gain insights from data. Our AI experts work closely with you to develop models that address your unique challenges. Whether it's predictive analytics, natural language processing, or computer vision, we have the expertise to deliver cutting-edge AI solutions. Stay ahead of the competition with our innovative AI services that drive efficiency and growth.",
        url: "",
        right: true,
    },
    {
        img: "/app1.jpg",
        name: "App Development",
        text: "Our app development services cover everything from concept to deployment. We build user-friendly mobile applications that meet your business needs. Our team specializes in both iOS and Android platforms, ensuring a wide reach for your app. We focus on creating intuitive interfaces and seamless functionality to enhance user engagement. From initial design to post-launch support, we provide comprehensive app development services that drive success in the mobile market.",
        url: "",
        right: false,
    },
    {
        img: "/ds1.jpg",
        name: "Data Science Solutions",
        text: "Unlock the potential of your data with our data science solutions. We provide analytics, predictive modeling, and data visualization to drive informed decisions. Our data scientists use advanced techniques to uncover hidden patterns and insights. We help you make data-driven decisions that enhance operational efficiency and strategic planning. From data cleaning to model deployment, we offer end-to-end data science services that empower your business with actionable intelligence.",
        url: "",
        right: true,
    },
];

export default function Services() {
    return (
        <div className="w-[100%] h-auto bg-graphite ">
            <Heading text="Our Services" className="text-white text-center mb-24" />
            <div className="flex flex-col  gap-32">
                {ServicesData.map((serviceData, index) => (
                    <Service key={index} img={serviceData.img} name={serviceData.name} text={serviceData.text} url={serviceData.url} right={serviceData.right} />
                ))}
            </div>
        </div>
    )
}