"use client";
import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import CoursePlan from "@/PageSpecificComponents/CourseDetails/CoursePlan";
import DownloadCurriculum from "@/PageSpecificComponents/CourseDetails/DownloadCurriculum";
import Reviews from "@/PageSpecificComponents/Home/Reviews";
import { useState } from "react";
import { useEffect } from "react";
const CourseDetails = ({ params }) => {
  const [course, setCourse] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `https://student-course-backend.onrender.com/api/course/singlecourse/${params?.slug}`
      );
      const courseData = await res.json();
      setCourse(courseData);
      setLoading(false);
    };
    fetchData();
  }, [params?.slug]);
  console.log(course);
  return (
    <section>
      <div>
        <div className="container pt-32 ">
          {isLoading ? (
            <div className="text-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <>
              <div className="flex gap-12 flex-col-reverse lg:flex-row">
                <div className=" text-[#502048] flex-1 lg:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {course?.name}
                  </h1>
                  <p className="py-2 md:py-4">{course?.description}</p>
                  <div className="flex items-center gap-3">
                    <Rating
                      readOnly
                      style={{ maxWidth: 80 }}
                      value={4.5}
                    ></Rating>{" "}
                    <p className="text-[#502048]">
                      <span className="text-lg font-semibold">{4.2}</span> (
                      {course?.studentEnroll} students)
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col md:flex-row md:items-center  gap-4">
                    <h3 className="text-3xl md:text-3xl font-semibold">
                      ₹ {course?.price}
                    </h3>
                    <button className="bg-[#FB7818]  text-white font-semibold px-12 py-3 rounded-md">
                      Enrol Now
                    </button>
                  </div>

                  <div className="grid grid-cols-2 bg-[#F3F8FF] md:px-5 py-3 rounded-lg gap-3 md:gap-8 md:grid-cols-3 mt-10">
                    <div className="text-center   text-[#502048] ">
                      <h2 className="text-lg md:text-xl font-medium">{0}</h2>
                      <p className="font-semibold">students enrolled</p>
                    </div>
                    <div className="text-center md:border-l-2  text-[#502048]">
                      <h2 className="text-lg md:text-xl font-medium">
                        {course?.duration}
                      </h2>
                      <p className="font-semibold">Week</p>
                    </div>
                    <div className="text-center md:border-l-2  text-[#502048]">
                      <h2 className="text-lg md:text-xl font-medium">
                        {course?.durationInHours}+
                      </h2>
                      <p className="font-semibold">hours </p>
                    </div>
                  </div>
                </div>
                <div className="card flex-1 ">
                  <Image
                    width={325}
                    height={325}
                    className="w-full h-[325px] rounded-2xl"
                    alt="courseImg"
                    src={course?.thumbnail}
                  ></Image>
                </div>
              </div>
              <CoursePlan course={course}></CoursePlan>
              {/* <DownloadCurriculum></DownloadCurriculum> */}
              <Reviews></Reviews>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
