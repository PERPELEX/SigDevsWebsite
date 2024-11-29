import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Service({ img, title, text, right = false }) {
    console.log("ollo " + img)
    return (
        <div className={`flex ${right ? "flex-row-reverse" : "flex-row"}  justify-start items-center gap-32`}>
            <span>
                <div
                    className="w-72 h-72 rounded-2xl shadow-2xl bg-cover bg-center flex flex-col justify-end"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            </span>

            <div className="w-auto flex flex-col justify-center items-start gap-4">
                <h3 className=" text-3xl font-semibold text-gray-400">{title}</h3>
                <p className="">{text}</p>
            </div>
        </div>
    )
}