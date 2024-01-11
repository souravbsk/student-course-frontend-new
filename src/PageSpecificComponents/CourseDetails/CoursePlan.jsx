import React, { useState } from "react";
import FullCourses from "./FullCourses";
import CourseNotes from "./CourseNotes";

const CoursePlan = ({ course }) => {
  const [tab, setTab] = useState(1);

  return (
    <section className="mt-16 sm:mt-32">
      <div className="container bg-[#471850] rounded-lg ">
        <div className="py-10">
          <div className=" rounded-lg">
            <h2 className="text-white p-5 text-2xl md:text-3xl font-medium text-center">
              Our Plan
            </h2>
          </div>

          <div className="md:col-span-2 p-5 bg-white rounded-lg">
            <FullCourses course={course}></FullCourses>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePlan;
