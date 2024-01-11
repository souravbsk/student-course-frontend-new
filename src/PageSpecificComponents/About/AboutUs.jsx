import HeadingWithPera from "@/components/HeadingWithPera/HeadingWithPera";
import React from "react";

import aboutImg from "@/assets/About/about_bg-9318.png";
import Image from "next/image";

const AboutUs = () => {
  const sub = "Our Story";
  const title = "The platform for the next billion students";
  const pera =
    "Online courses designed for creatives and made for everyone. Take a course on Code, Design or Project";
  return (
    <div className="bg-[#502048] pb-16 pt-32">
      <div className="container ">
        <div className=" flex gap-6 items-center flex-col lg:flex-row">
          <div className=" text-white flex-1 lg:text-left">
            <HeadingWithPera
              sub={sub}
              title={title}
              pera={pera}
              color="text-white"
            ></HeadingWithPera>
          </div>
          <div className="w-full flex-1">
            <Image
              src={aboutImg}
              alt="aboutImg"
              width={444}
              height={444}
              className="max-w-full w-full md:w-[444px] mx-auto rounded-full md:h-[444px]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
