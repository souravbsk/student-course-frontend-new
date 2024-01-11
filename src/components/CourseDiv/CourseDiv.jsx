'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaSignal, FaVideo } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
const CourseDiv = ({ course }) => {
  const {
    id,
    authorImg,
    authorTitle,
    price,
    slug,
    enrollCount,
    category,
    courseWeek,
    thumbnail,
    courseLabel,
    courseLesson,
    name,
    description,
  } = course;

  return (
    <Link href={`/course-details/${slug}`}>
      <div className="p-2 group shadow-lg bg-white rounded-md border border-gray-200">
        <figure className="overflow-hidden rounded-md">
          <Image
            className="w-full duration-300 group-hover:scale-105 h-56 rounded-md"
            src={thumbnail}
            alt=""
            width={100}
            height={100}
          />
        </figure>

        <div className="px-2 flex h-fit flex-col gap-2 py-3">
          <div className="flex justify-between items-center">
            <span className="bg-[#511C48] text-white text-xs mr-2 px-3.5 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h2 className="  text-[#511C48] font-semibold course-sm:whitespace-nowrap w-full md:w-50 overflow-hidden overflow-ellipsis">{name}</h2>
          <div className="flex items-center gap-3">
            <Rating readOnly style={{ maxWidth: 80 }} value={4.5}></Rating> <p className="text-[#502048]"><span className="text-sm font-semibold">{course?.review}</span> (4.2 students)</p>
          </div>

        </div>
        <hr />
        <div className="py-3 flex justify-between items-center">
          <h3 className="text-xl text-primary font-semibold">₹{price}</h3>
          <button className=" bg-[#FB7818] text-white font-medium text-sm px-4 py-2 rounded-md origin-center scale-95 hover:scale-100 transition-all duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseDiv;
