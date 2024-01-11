"use client";
import CourseBanner from "@/PageSpecificComponents/Course/CourseBanner";
import Courses from "@/PageSpecificComponents/Home/Courses";
import { setOpen } from "@/Store/RegisterModalSlice/RegisterModalSlice";

import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

const AllCourses = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(false);
  const [isDiscount, setDiscount] = useState(true);

  const handleEnrollClass = () => {
    setDiscount(false);
    dispatch(setOpen(true));
  };

  return (
    <div className=" ">
      <div className="courseBg relative py-24  flex items-center justify-center">
        <div className="container">
          {user ? (
            <CourseBanner></CourseBanner>
          ) : (
            <div className=" flex flex-col sm:flex-row gap-6 items-center justify-between   pt-20">
              <h1 className="text-3xl shrink-0 text-white font-bold">
                Our Courses{" "}
              </h1>

              {isDiscount && (
                <div className=" ">
                  <div className=" sm:w-7/12  ml-auto border-[#FB7718] border-2 rounded-md ">
                    <div className="px-3 relative bg-white py-28">
                      
                      <h3 className="text-primary text-center text-3xl font-semibold">
                        Get up to 50% off on your first course
                      </h3>
                    </div>
                    <button
                      onClick={handleEnrollClass}
                      className="btn w-full rounded-none border-0 text-white bg-[#FB7718]"
                    >
                      Enroll now
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 md:mt-20">
        <Courses></Courses>
      </div>
    </div>
  );
};

export default AllCourses;
