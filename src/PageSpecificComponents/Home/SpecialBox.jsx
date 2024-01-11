"use client";
import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
const SpecialBox = () => {
  return (
    <div className="max-w-full px-3 container lg:w-8/12 mx-auto">
      <div className="p-4 bg-gradient-to-r from-[#571F44] to-[#461850] md:p-8 relative shadow-2xl -top-20 sm:-top-32 bg-[#989eeae7] rounded-md">
        <h2 className="text-xl text-center font-semibold text-white">
          If you have the courage and the commitment to learn coding, then
          Coding Ninjas will empower you.
        </h2>
        <p className="mt-2 text-center text-gray-100">
          NO MATTER WHAT IT TAKES!
        </p>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
          <div className="flex px-5 py-4 gap-2">
            <p className="text-2xl text-white">
              <GiNotebook></GiNotebook>
            </p>
            <h3 className="text-gray-100 font-medium">
              Content designed by IIT & Stanford alumni
            </h3>
          </div>
          <div className="flex px-5 py-4 gap-2">
            <p className="text-2xl text-white">
              <GiNotebook></GiNotebook>
            </p>
            <h3 className="text-gray-100 font-medium">
              Content designed by IIT & Stanford alumni
            </h3>
          </div>
          <div className="flex px-5 py-4 gap-2">
            <p className="text-2xl text-white">
              <GiNotebook></GiNotebook>
            </p>
            <h3 className="text-gray-100 font-medium">
              Content designed by IIT & Stanford alumni
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialBox;
