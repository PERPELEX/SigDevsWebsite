import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// components/Footer.js
export default function Footer() {

    const [linkedin, setLinkedin]=useState(false);
    const [github, setGithub]=useState(false);
    const [instagram, setInstagram]=useState(false);
    const [facebook, setFacebook]=useState(false);

    return (
        <footer className="bg-[#111] text-white pt-8 noto shadow-2xl">
            <div className="px-24 flex flex-row justify-between items-start">
                {/* Left Section: Logo and Description */}
                <div className="w-[55%] flex flex-col justify-center">
                    <Image
                        src="/logo-dark.png"
                        width={400}
                        height={100}
                        alt="logo"
                    />
                    <p className="w-[80%] font-extralight">
                        Specializing in tailored digital solutions, we offer innovative strategies in AI, software development, and IT services to elevate businesses globally and drive success.
                    </p>
                    <div className="mt-8 flex flex-row justify-start items-center gap-x-12">
                        <span 
                        className="hover:text-[#0077B5] transition-all ease-in-out duration-200"
                        onMouseEnter={()=>setLinkedin(true)}
                        onMouseLeave={()=>setLinkedin(false)}
                        >
                            <Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={linkedin?"#0077b5":"none"} stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </Link>
                        </span>
                        <span 
                        className="hover:text-[#6E5494] transition-all ease-in-out duration-200"
                        onMouseEnter={()=>setGithub(true)}
                        onMouseLeave={()=>setGithub(false)}
                        >
                        <Link href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={github?"#6E5494":"none"} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </Link>
                        </span>
                        <span 
                        className="hover:text-[#37164a] transition-all ease-in-out duration-200"
                        onMouseEnter={()=>setInstagram(true)}
                        onMouseLeave={()=>setInstagram(false)}
                        >
                        <Link href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={instagram?"#DD2A7B":"none"} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </Link>
                        </span>
                        <span 
                        className="hover:text-[#1877F2] transition-all ease-in-out duration-200"
                        onMouseEnter={()=>setFacebook(true)}
                        onMouseLeave={()=>setFacebook(false)}
                        >
                        <Link href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={facebook?"#1877F2":"none"} stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </Link>
                        </span>
                    </div>
                </div>

                {/* Middle Section: Quick Links */}
                <div className=" flex flex-col justify-center gap-y-4 mt-8">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="flex flex-col justify-center gap-2 font-light">
                        <li>
                            <Link href="/">
                                <span className="hover:text-night-blue">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="hover:text-night-blue">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#services">
                                <span className="hover:text-night-blue">Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="hover:text-night-blue">Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Contact Info */}
                <div className="flex flex-col justify-center gap-y-4 mt-8">
                    <h3 className="text-xl font-semibold">Get In Touch</h3>
                    <ul className="flex flex-col justify-center gap-2 font-light">
                        <li className="flex flex-row gap-5 items-center">
                            <p>Email :</p>
                            <a href="mailto:info@sigdevs.com" className="hover:text-night-blue font-extralight">info@sigdevs.com</a>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <p>Phone :</p>
                            <a href="tel:+923705664516" className="hover:text-night-blue font-extralight">+92 370 5664516</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center border-t-2  border-sig-blue mt-8 p-4 text-sm text-white">
                © All Rights Reserved.
            </div>
        </footer>
    );
}
