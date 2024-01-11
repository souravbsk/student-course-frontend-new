"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import HeaderLogo from "@/assets/logo/logo2.png";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useDispatch } from "react-redux";
import { setOpen as setRegisterModalOpen } from '@/Store/RegisterModalSlice/RegisterModalSlice';
import { setOpen as setLoginModalOpen } from '@/Store/LoginModalSlice/LoginModalSlice';
import AuthModelLayout from "@/components/LoginModal/AuthModelLayout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const session = useSession();

  const varifyOauthFromServer = async (data) => {
    try {
      const res = await fetch("/api/auth/google_auth_success", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const result = await res.json();
      console.log("data from server: ", result);
      if (result.success) {
        dispatch(setLoginModalOpen(false));
        dispatch(setRegisterModalOpen(false));
        setLoggedIn(true);
      } else setLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      console.log("logged in");
      varifyOauthFromServer(session);
    }
  }, [session]);

  return (
    <header className="">

      <AuthModelLayout />

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
          <div className="flex md:order-2 gap-2">
            {!loggedIn &&
              <>
                <button
                  onClick={() => dispatch(setLoginModalOpen(true))}
                  className="btn-sm md:text-white text-white  btn-secondary  md:btn-secondary md:mr-6  text-sm px-4 md:px-6 py-2 rounded-md"
                >
                  Sign in
                </button>
                <button
                  onClick={() => dispatch(setRegisterModalOpen(true))}
                  className="btn-sm  hidden md:block md:text-white text-white btn-secondary  md:btn-secondary md:mr-6  text-sm px-4 md:px-6 py-2 rounded-md"
                >
                  Register
                </button>
              </>
            }

            {
              loggedIn &&
              <div className="flex items-center gap-2">
                <>
                    {
                      session?.data?.user?.image ?
                        <Link href={"/profile"}>
                          <img src={session?.data?.user?.image} width={40} height={40} className="border-2 border-white rounded-full" />
                        </Link>
                        : <FaUserCircle className="text-2xl text-white" />
                    }
                    <span className="text-white hidden lg:block">{session?.data?.user?.name}</span>
                  </>
              </div>
            }

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
            className={`items-center justify-between bg-transparent w-full md:flex md:w-auto duration-300 md:order-1 ${showNav ? "block" : "hidden"}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col gap-2 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:bg-transparent  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ">
              {
                navLinks?.map((item, i) => {
                  const isActive = pathname === item?.href
                  return <li key={i} className="relative">
                    <Link
                      className={`${isActive ? "active-nav" : ""} text-sm px-3 py-2 font-medium hover:text-[#FB7818] text-[#502048] md:text-white duration-150`}
                      href={item?.href}
                      onClick={() => setShowNav(false)}
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
