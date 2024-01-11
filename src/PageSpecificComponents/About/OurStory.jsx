import Image from "next/image";
import React from "react";
import ourStoryImage from "@/assets/About/story.png";

const OurStory = () => {
  return (
    <div className="mt-16 sm:mt-32">
      <div className="container ">
        <div className=" flex gap-6 flex-col lg:flex-row">
          <div className=" flex-1 lg:text-left">
            <p className="text-[#FB7818] mb-3 text-xl md:text-3xl font-medium ">
              Our Story
            </p>
            <h3
              className={`text-xl mb-3 text-[#471850] font-light`}
            >
              At Coding Ninjas, our mission is to continuously innovate the best
              ways to train the next generation of developers and to transform
              the the way tech education is delivered.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              similique quibusdam iure quod neque autem modi est enim corporis
              illo vitae dolorum facilis aliquam error temporibus, reprehenderit
              culpa aut facere voluptates quidem sed doloribus. Molestiae
              molestias pariatur quaerat explicabo facilis ducimus, ipsam
              repudiandae incidunt reiciendis nihil tempore labore animi
              exercitationem.
            </p>
          </div>
          <div className="w-full flex-1">
            <Image
              src={ourStoryImage}
              alt="ourStoryImage"
              width={444}
              height={444}
              className="max-w-full w-full md:w-[444px] mx-auto md:h-[444px]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
