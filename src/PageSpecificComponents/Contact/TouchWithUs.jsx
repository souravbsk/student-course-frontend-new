import HeadingWithPera from "@/components/HeadingWithPera/HeadingWithPera";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const TouchWithUs = () => {
  const sub = "Contact";
  const title = "Get in touch with us";
  const pera =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae nobis dicta iure ea quam vitae harum eius temporibus, error explicabo, enim eligendi ut? Impedit ea commodi earu consequuntur placeat.";
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 items-end justify-between">
        <div className="flex-1">
          <HeadingWithPera
            sub={sub}
            title={title}
            pera={pera}
          ></HeadingWithPera>
          <ul className="mt-8 space-y-4">
            <li className="flex border-2 flex-col md:text-left text-center md:flex-row rounded-2xl px-5 py-5 gap-4">
              <div>
                <p className="px-4 inline-block text-white rounded-full py-4 bg-[#502048]">
                  <FaPhoneAlt size={16}></FaPhoneAlt>
                </p>
              </div>
              <div>
                <p className="text-lg mb-1 font-semibold">
                  Call us on: +855125666
                </p>
                <p className="tex-sm">Our office hours are Monday – Friday, 9 am-6 pm</p>
              </div>
            </li>
            <li className="flex border-2 flex-col md:text-left text-center md:flex-row rounded-2xl px-5 py-5 gap-4">
              <div>
                <p className="px-4 inline-block text-white rounded-full py-4 bg-[#502048]">
                  <GrMail size={16}></GrMail>
                </p>
              </div>
              <div>
                <p className="text-lg mb-1 font-semibold">
                  Email us directly
                </p>
                <p className="tex-sm">info@courselog.com</p>
              </div>
            </li>
            <li className="flex border-2 flex-col md:text-left text-center md:flex-row rounded-2xl px-5 py-5 gap-4">
              <div>
                <p className="px-4 inline-block text-white rounded-full py-4 bg-[#502048]">
                  <FaMapMarkerAlt size={16}></FaMapMarkerAlt>
                </p>
              </div>
              <div>
                <p className="text-lg mb-1 font-semibold">
                  Our Location
                </p>
                <p className="tex-sm">70-80 Upper St Norwich NR2 1LT</p>
              </div>
            </li>
          </ul>
          <div>
            <ul className="mt-6 flex  md:justify-start justify-center items-center gap-4">
              <li className="text-2xl px-3 cursor-pointer py-3 bg-[#502048] rounded-full text-white">
                <FaFacebook></FaFacebook>
              </li>
              <li className="text-2xl px-3 cursor-pointer py-3 bg-[#502048] rounded-full text-white">
                <FaInstagram></FaInstagram>
              </li>
              <li className="text-2xl px-3 cursor-pointer py-3 bg-[#502048] rounded-full text-white">
                <FaLinkedin></FaLinkedin>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 w-full">
          <iframe
            title="Google Map"
            height="500"
            className="w-full"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40.748817!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI3JzU5LjUiTiA3M8KwMTQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1609459038613!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TouchWithUs;
