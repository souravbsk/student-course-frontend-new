"use client";
import Footer from "@/Shared/Footer/Footer";
import Header from "@/Shared/Header/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import HeaderLogo from "@/assets/logo/logo2.png";
import { usePathname } from "next/navigation";
import { LoginContext } from "@/Providers/LoginModalProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

const navLinks = [
  {
    name: "Dashboard",
    href: "/teacher-dashboard",
    icon: AiOutlineUserAdd,
  },
  {
    name: "Log out",
    href: "/",
    icon: BiLogOut,
  }
];

const Layout = ({ children }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false); // Set initial state to collapsed
  const [isOpen, setIsOpen] = useContext(LoginContext);
  const [showNavText, setShowNavText] = useState(false);
  const pathname = usePathname();

  const handleToggleClick = () => {
    if (menuCollapsed) {
      setShowNavText((prevState) => !prevState);
    } else {
      setTimeout(() => {
        setShowNavText((prevState) => !prevState);
      }, 200);
    }
    setMenuCollapsed((prevState) => !prevState);
    console.log("menu collapse: ", menuCollapsed);
  };


  return (
    <div className="min-h-screen">
      <button className="btn btn-primary fixed text-2xl z-20 top-4 left-4" onClick={handleToggleClick} id="toggler" >
        <GiHamburgerMenu />
      </button>

      {menuCollapsed && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-10"
          onClick={handleToggleClick}
        />
      )}

      <div className={`bg-primary py-6 w-[240px] transition-all duration-300 fixed z-10 min-h-screen`} id="navbar"
        style={{
          width: menuCollapsed ? "240px" : "100px",
        }}>
        <nav className="flex flex-col">
          <div className="container relative top-16">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src={HeaderLogo}
                width={132}
                height={132}
                className="w-[50px] h-[50px]"
                alt="HeaderLogo"
              />
            </Link>
            <div className={`mt-12 transition-all duration-300`} id="navbar-sticky">
              <ul className="flex flex-col gap-2 items-stretch"
                style={{
                  alignItems: menuCollapsed ? "flex-start" : "center",
                  marginLeft: menuCollapsed ? "20px" : "",
                }}
              >
                {navLinks?.map((item, i) => {
                  const isActive = pathname === item?.href;
                  return (
                    <li key={i} className="relative w-full">
                      <Link
                        className="block w-full px-3 py-2 text-lg font-medium hover:bg-[#FB7818] text-white rounded-lg transition-all duration-150 ease-in group"
                        href={item?.href}
                        style={{
                          textAlign: menuCollapsed ? "left" : "center",
                          color: isActive ? "#FB7818" : "",
                        }}
                      >
                        <item.icon className="inline-block group-hover:text-white text-xl" />
                        <span className={`group-hover:text-white ml-4 `}
                          style={{
                            display: showNavText ? "" : "none",
                          }}
                        >{item?.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={`flex mt-8 flex-col transition-all duration-300 pl-[30px]`}
              style={{
                alignItems: menuCollapsed ? "flex-start" : "center",
              }}
            >
            </div>
          </div>
        </nav>
      </div>
      <div className={`p-4 ml-[95px]`}>
        {children}
      </div>
    </div>
  );
};
export default Layout;
