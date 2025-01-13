import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const [linkedin, setLinkedin] = useState(false);
  const [github, setGithub] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [path, setPath] = useState(null);

  useEffect(() => {
    if (router.asPath) {
      setPath(router.asPath);
      console.log("olllo " + path);
    }
  }, [router]);

  return (
    <footer className="bg-[#111] text-white pt-8 noto shadow-2xl">
      <div className="px-8 md:px-24 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Logo and Description */}
        <div className="w-full md:w-[55%] flex flex-col justify-center mb-8 md:mb-0">
          <Image src="/logo-dark.png" width={400} height={100} alt="logo" />
          <p className="w-full md:w-[80%] font-extralight">
            Specializing in tailored digital solutions, we offer innovative
            strategies in AI, software development, and IT services to elevate
            businesses globally and drive success.
          </p>
          <div className="mt-8 flex flex-row justify-start items-center gap-x-6 md:gap-x-12">
            <span
              className="hover:text-[#0077B5] transition-all ease-in-out duration-200"
              onMouseEnter={() => setLinkedin(true)}
              onMouseLeave={() => setLinkedin(false)}
            >
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={linkedin ? "#0077b5" : "none"}
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </span>
            <span
              className="hover:text-[#6E5494] transition-all ease-in-out duration-200"
              onMouseEnter={() => setGithub(true)}
              onMouseLeave={() => setGithub(false)}
            >
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={github ? "#6E5494" : "none"}
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
            </span>
            <span
              className="hover:text-[#37164a] transition-all ease-in-out duration-200"
              onMouseEnter={() => setInstagram(true)}
              onMouseLeave={() => setInstagram(false)}
            >
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={instagram ? "#DD2A7B" : "none"}
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </span>
            <span
              className="hover:text-[#1877F2] transition-all ease-in-out duration-200"
              onMouseEnter={() => setFacebook(true)}
              onMouseLeave={() => setFacebook(false)}
            >
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={facebook ? "#1877F2" : "none"}
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>

        <div className="w-full md:w-[40%] flex flex-row justify-between items-start md:items-center ">
          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-auto flex flex-col justify-center gap-y-4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="flex flex-col justify-center gap-2 font-light">
              <li>
                <Link href="/">
                  <span
                    className={`${
                      path === "/" ? "text-night-blue" : ""
                    } hover:text-night-blue transition-all ease-in-out duration-200`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span
                    className={`${
                      path === "/about" ? "text-night-blue" : ""
                    } hover:text-night-blue transition-all ease-in-out duration-200`}
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <span
                    className={`${
                      router.query.service ? "text-night-blue" : ""
                    } hover:text-night-blue transition-all ease-in-out duration-200`}
                  >
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span
                    className={`${
                      path === "/contact" ? "text-night-blue" : ""
                    } hover:text-night-blue transition-all ease-in-out duration-200`}
                  >
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="w-full md:w-auto flex flex-col justify-center gap-y-4">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <ul className="flex flex-col justify-center gap-2 font-light">
              <li className="flex flex-row gap-5 items-center">
                <p>Email :</p>
                <a
                  href="mailto:info@sigdevs.com"
                  className="hover:text-night-blue font-extralight transition-all ease-in-out duration-200"
                >
                  info@sigdevs.com
                </a>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>Phone :</p>
                <a
                  href="tel:+923705664516"
                  className="hover:text-night-blue font-extralight transition-all ease-in-out duration-200"
                >
                  +92 370 5664516
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t-2 border-sig-blue mt-8 p-4 text-sm text-white">
        © All Rights Reserved.
      </div>
    </footer>
  );
}
