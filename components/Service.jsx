import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Service({ img, name, text, url = "", right = false }) {
    return (
        <div className={`flex flex-row${right ? "-reverse" : ""}  justify-start items-center gap-32`}>
            <span className="-[30%] hover:scale-110 transition-all ease-in-out duration-200">
                <Link href={url}>
                    <div
                        className="w-72 h-72 rounded-2xl shadow-2xl bg-cover bg-center flex flex-col justify-end"
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                </Link>
            </span>
            <div className="w-auto flex flex-col justify-center items-start gap-4">
                <h3 className=" text-3xl font-semibold text-blue-400">{name}</h3>
                <p className="">{text}</p>
                <Link href={url}>
                    <button className="border-2 p-2 rounded-xl hover:border-night-blue hover:text-night-blue transition-all ease-in-out duration-200" >View Details</button>
                </Link>
            </div>
        </div>
    )
}