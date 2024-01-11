import React from "react";

const AboutCountUp = () => {
  return (
    <div className="mt-16 sm:mt-32 container">
      <div className="grid grid-cols-1 bg-[#F3F8FF] md:px-5 py-10 rounded-xl gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
        <div className="text-center   text-[#502048] ">
          <h2 className="text-xl md:text-2xl font-medium">23M+</h2>
          <p className="font-semibold">Learners & counting</p>
        </div>
        <div className="text-center md:border-l-2  text-[#502048]">
          <h2 className="text-xl md:text-2xl font-medium">130K+</h2>
          <p className="font-semibold">Total courses</p>
        </div>
        <div className="text-center md:border-l-2  text-[#502048]">
          <h2 className="text-xl md:text-2xl font-medium">36+</h2>
          <p className="font-semibold">Languages</p>
        </div>
        <div className="text-center md:border-l-2  text-[#502048]">
          <h2 className="text-xl md:text-2xl font-medium">89%</h2>
          <p className="font-semibold">Successful students</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCountUp;
