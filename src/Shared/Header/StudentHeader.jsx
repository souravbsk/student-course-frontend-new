"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import HeaderLogo from "@/assets/logo/logo2.png";
import Image from "next/image";
import { usePathname } from 'next/navigation'


const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Study Materials",
    href: "/study-materials"
  },
  {
    name: "Courses",
    href: "/course"
  },
  {
    name: "Contact",
    href: "/contact"
  }
]



const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const pathname = usePathname();

  const user = false;
  const userName = "hello world";


  const handleLogOut = () => { };

  return (
    <header className="">

      <nav
        className={` fixed  bg-[#471850]  w-full duration-300 z-20 top-0 left-0`}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto py-2">
          <Link href="/" className="flex items-center">
            <Image
              src={HeaderLogo}
              width={132}
              height={132}
              className="w-[50px] h-[50px]"
              alt="HeaderLogo"
            ></Image>
          </Link>
          <div className="flex md:order-2">
            <button
              onClick={() => setShowNav(!showNav)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex ms-3 items-center p-2 text-sm text-white bg-[#49194D] rounded-lg md:hidden hover:bg-gray-[#49194D] focus:outline-none focus:ring-0"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between bg-transparent w-full md:flex md:w-auto duration-300 md:order-1 ${showNav ? "block" : "hidden"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:bg-transparent  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ">
              {
                navLinks?.map((item, i) => {
                  const isActive = pathname === item?.href
                  return <li key={i} className="relative">
                    <Link
                      className={`${isActive ? "active-nav" : ""} text-sm px-3 py-2 font-medium hover:text-[#FB7818] text-[#502048] md:text-white duration-150`}
                      href={item?.href}
                    >
                      {item?.name}
                    </Link>
                  </li>
                })
              }


            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
