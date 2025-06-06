import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ListItem from "@/components/ListItem";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isIconClicked2, setIsIconClicked2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [path, setPath] = useState(null);

  // assign initial path
  useEffect(() => {
    if (router.asPath) {
      setPath(router.asPath); // Update state when the query is available
    }
  }, [router.asPath]);

  //   assign path if it changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      // console.log('App is changing to: ', url);
      setPath(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIconClicked(!isIconClicked);
    setIsDropdownOpen2(false);
    setIsIconClicked2(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsIconClicked2(!isIconClicked2);
    setIsDropdownOpen(false);
    setIsIconClicked(false);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const items1 = [
    {
      name: "Website Development",
      url: "/Web",
    },
    {
      name: "AI Model & Sloutions",
      url: "/AI",
    },
    {
      name: "App Development",
      url: "/App",
    },
    {
      name: "Data Science & Solutions",
      url: "/DSS",
    },
  ];

  const items2 = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ];

  const list1 = items1.map((item, index) => {
    return (
      <ListItem
        key={index}
        itemName={item.name}
        url={item.url}
        active={path === item.url}
      />
    );
  });
  const list2 = items2.map((item, index) => {
    return (
      <ListItem
        key={index}
        itemName={item.name}
        url={item.url}
        active={path === item.url}
      />
    );
  });

  return (
    <header
      className={`bg-[#111] text-white noto flex flex-col px-10 md:px-20 py-6 shadow-2xl z-50 transition-all duration-900 ease-in-out ${
        isDropdownOpen || isDropdownOpen2 ? "max-h-[1000px]" : "max-h-[90px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold flex flex-row items-start gap-x-8 ">
            {/* <span
                            className={`cursor-pointer hidden md:flex ${isIconClicked ? 'text-night-blue rotate-90' : 'text-white rotate-0'} hover:text-night-blue transition-all duration-300`}
                            onClick={toggleDropdown}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="3" y="5" width="18" height="2" fill="currentColor" />
                                <rect x="3" y="11" width="14" height="2" fill="currentColor" />
                                <rect x="3" y="17" width="10" height="2" fill="currentColor" />
                            </svg>
                        </span> */}
            <Image src="/logo-dark.png" width={150} height={50} alt="logo" />
          </div>
        </div>

        <nav className="flex items-center gap-x-16">
          {/* Navigation Links */}
          <span className="hidden md:flex items-center gap-x-16">
            <Link href="/">
              <span
                className={`${
                  path === "/" ? "text-night-blue" : ""
                } hover:text-night-blue cursor-pointer transition-colors duration-300`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`${
                  path === "/about" ? "text-night-blue" : ""
                } hover:text-night-blue cursor-pointer transition-colors duration-300`}
              >
                About Us
              </span>
            </Link>
            <span
              onClick={toggleDropdown}
              className={`${
                isDropdownOpen || router.query.service
                  ? "text-night-blue"
                  : "text-white"
              } flex flex-row items-center  hover:text-night-blue cursor-pointer transition-colors duration-300`}
            >
              <p>Services</p>
              <svg
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>

          {/* Login Button */}
          <Link href="/contact">
            <button
              className={`${
                path === "/contact"
                  ? "bg-[#111} text-night-blue border-night-blue"
                  : "bg-sig-blue text-white border-sig-blue"
              } hidden md:flex font-semibold border-2 hover:bg-[#111] hover:text-night-blue hover:border-night-blue px-4 py-2 rounded-xl transition-colors duration-300`}
            >
              Contact Us
            </button>
          </Link>
          <span
            className={`mr-2 cursor-pointer flex md:hidden ${
              isIconClicked2
                ? "text-night-blue -rotate-90"
                : "text-white rotate-0"
            } hover:text-night-blue transition-all duration-300`}
            onClick={toggleDropdown2}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="2" fill="currentColor" />
              <rect x="7" y="11" width="14" height="2" fill="currentColor" />
              <rect x="11" y="17" width="10" height="2" fill="currentColor" />
            </svg>
          </span>
        </nav>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "max-h-44 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Services</p>
          {list1}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen2
            ? "max-h-70 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Check</p>
          {list2}
          <div
            onClick={handleToggle}
            className="flex items-center cursor-pointer"
          >
            <p className="text-xl mt-2 mb-2">Services</p>
            <svg
              className={`ml-2 transition-transform duration-300 ${
                isToggled || router.query.service ? "rotate-180" : "rotate-0"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {(isToggled || router.query.service) && list1}
        </div>
      </div>
    </header>
  );
}
