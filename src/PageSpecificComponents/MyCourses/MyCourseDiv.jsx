'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaSignal, FaVideo } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
const MyCourseDiv = ({ course }) => {
  const {
    id,
    authorImg,
    authorTitle,
    price,
    enrollCount,
    courseCategory,
    courseWeek,
    courseImg,
    courseLabel,
    courseLesson,
    courseTitle,
    description,
  } = course;


  return (
    <div className="p-2 group shadow-lg bg-white">
      <figure className="overflow-hidden rounded-md">
        <Image
          className="w-full duration-300 group-hover:scale-105 h-56 rounded-md"
          src={courseImg}
          alt=""
          width={100}
          height={100}
        />
      </figure>

      <div className="px-2 flex h-fit flex-col gap-2 py-3">
        <div className="flex justify-between items-center">
          <span className="bg-[#511C48] text-white text-xs font-medium mr-2 px-3.5 py-1 rounded-full">
            {courseCategory}
          </span>
        </div>
        <h2 className="text-[#511C48] font-semibold course-sm:whitespace-nowrap w-full md:w-50 overflow-hidden overflow-ellipsis ">{courseTitle}</h2>
        <div className="flex items-center gap-3">
          <Rating readOnly style={{ maxWidth: 100 }} value={course?.review}></Rating> <p className="text-[#502048]"><span className="text-xl font-semibold">{course?.review}</span> ({course?.studentEnroll} students)</p>
        </div>

      </div>
      <hr />
      <div className="py-3 flex justify-end items-center">
        {/* <h4 className="font-base text-md">completed: 0%</h4> */}
        <Link className=" bg-[#FB7818] text-white font-semibold px-6 py-3 rounded-md"
          href={`/myCourses/${id}`}>
          Start Course
        </Link>
      </div>
    </div>
  );
};

export default MyCourseDiv;
