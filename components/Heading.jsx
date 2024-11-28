import React from "react"

export default function Heading({ className, text }) {
    return (
        <div className={`w-[100%] flex flex-row justify-center items-center gap-6 mb-8 ${className}`}>
            <div className="w-20 h-3 bg-sig-blue rounded-[2px] shadow-2xl "></div>
            <h2 className="text-center text-5xl font-bold tracking-wider drop-shadow-2xl">{text}</h2>
            <div className="w-20 h-3 bg-sig-blue rounded-[2px] shadow-2xl "></div>
        </div>
    )
}