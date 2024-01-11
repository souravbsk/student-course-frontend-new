import React from "react";
import HeaderLogo from "@/assets/logo/logo2.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-16 sm:mt-32">
      <footer className="bg-[#502048] ">
        <div className="container pb-10 border-b border-white pt-12 md:pt-32">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/">
                <Image
                  src={HeaderLogo}
                  width={50}
                  height={50}
                  className="w-16 h-16"
                  alt="HeaderLogo"
                ></Image>
              </Link>
              <p className="text-white mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                ullam eveniet earum quam aspernatur ut nulla ea minus recusandae
              
              </p>

              <ul className="flex mt-8 items-center gap-3">
                <li className="px-3 py-3 rounded-full shadow-lg cursor-pointer text-[#471950] bg-[#FFFFFF]">
                  <Link href="/">
                    <FaFacebookF size={22}></FaFacebookF>
                  </Link>
                </li>
                <li className="px-3 py-3 rounded-full shadow-lg cursor-pointer text-[#471950] bg-[#FFFFFF]">
                  <Link href="/">
                    <FaTwitter size={22}></FaTwitter>
                  </Link>
                </li>
                <li className="px-3 py-3 rounded-full shadow-lg cursor-pointer text-[#471950] bg-[#FFFFFF]">
                  <Link href="/">
                    <FaInstagram size={22}></FaInstagram>
                  </Link>
                </li>
                <li className="px-3 py-3 rounded-full shadow-lg cursor-pointer text-[#471950] bg-[#FFFFFF]">
                  <Link href="/">
                    <FaLinkedinIn size={22}></FaLinkedinIn>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Courses</h3>
              <ul className="mt-6 text-white space-y-3">
                <li>
                  <Link href="/">Web Development</Link>
                </li>
                <li>
                  <Link href="/">Web Development</Link>
                </li>
                <li>
                  <Link href="/">Web Development</Link>
                </li>
                <li>
                  <Link href="/">Web Development</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Quick Link</h3>
              <ul className="mt-6 text-white space-y-3">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Terms and condition </Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Account</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white font-semibold text-xl">Address</h3>
              <ul className="mt-6 text-white space-y-3">
                <li className="flex items-center gap-3 ">
                  <FaPhoneAlt></FaPhoneAlt> <span>+801512255</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <MdMail></MdMail> <span>admin.course@gmail.com</span>
                </li>
              </ul>

              <div className="form-control mt-6 w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn text-white border-0 hover:text-[#471950] bg-[#471950] absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center py-4 text-white">Copyright © 2023 - All right reserved by GPF</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
