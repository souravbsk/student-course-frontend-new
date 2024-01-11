"use client";
import CourseDiv from "@/components/CourseDiv/CourseDiv";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Courses = () => {
  const [courseDatas, setCourseData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch("api/course/getCourse")
      const allCorses = await response.json()
      setCourseData(allCorses);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="">
      <div className="container">
        <h1 className=" text-transparent text-center text-xl md:text-4xl  font-bold bg-clip-text bg-gradient-to-r from-[#502048] to-[#471950]">
          Courses
        </h1>
        {isLoading ? (
          <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 course-md:gap-2  course-md:grid-cols-3 course-sm:grid-cols-2 gap-8 mt-12 course-sm:gap-5 course-lg:gap-8">
            {courseDatas?.slice(0, 6).map((course) => (
              <CourseDiv key={course.id} course={course}></CourseDiv>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
