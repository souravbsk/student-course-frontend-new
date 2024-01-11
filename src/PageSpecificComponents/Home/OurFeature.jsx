'use client'
import FeatureDiv from "@/components/FeatureDiv/FeatureDiv";
import React from "react";
import {BsCodeSlash} from "react-icons/bs"
const OurFeature = () => {
  return (
    <section className=" mt-16 sm:mt-32">
      <div className="container">
        <h1 className=" text-transparent text-center text-xl md:text-3xl  font-bold bg-clip-text bg-gradient-to-r from-[#502048] to-[#471950]">
          Our Feature
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-8 gap-8">
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
          <FeatureDiv icon={<BsCodeSlash></BsCodeSlash>} title="Development"></FeatureDiv>
         
        </div>
      </div>
    </section>
  );
};

export default OurFeature;
