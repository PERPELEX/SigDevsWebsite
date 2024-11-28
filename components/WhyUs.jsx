import React from "react"
import Heading from "@/components/Heading"
import Reason from "@/components/Reason"

const dataSets=[
    {
        icon:"bulb",
        name:"Cutting-Edge Expertise",
        text:"Specializing in the latest tech, we deliver innovative, tailored solutions.",
    },
    {
        icon:"puzzle",
        name:"Tailored Approach",
        text:"We offer bespoke services aligned with your unique business needs.",
    },
    {
        icon:"chart",
        name:"Proven Success",
        text:"Our history showcases satisfied clients and successful tech projects.",
    },
    {
        icon:"comprehensive",
        name:"Comprehensive Services",
        text:"From design to HR, we cover all your tech consulting needs under one roof..",
    },
]

export default function WhyUs() {
    return (
        <div>
            <Heading text="Why Choose Us" className="text-white mb-24" />
            <div className="flex flex-row justify-between items-center gap-20">
                {dataSets.map(data => {
                    return <Reason icon={data.icon} name={data.name} text={data.text} />
                })}
            </div>
        </div>
    )
}