import React from "react";

const FeatureDiv = ({ icon, title, value }) => {
  return (
    <div className="bg-gradient-to-r from-[#461850] to-[#561E44] group hover:bg-gray-200 duration-300 p-8 cursor-pointer rounded-lg shadow text-center space-y-3">
      <div className="w-12 inline-flex items-center justify-center h-12 group-hover:bg-white bg-gray-300  text-gray-800 text-xl rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg text-white font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureDiv;
