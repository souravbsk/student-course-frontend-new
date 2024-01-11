import InstructorDiv from "@/components/InstructorDiv/InstructorDiv";
import Image from "next/image";
import React from "react";
const OurInstructors = () => {
  return (
    <div className="mt-16 sm:mt-32">
      <div className="container">
        <h2 className="text-3xl font-semibold">Our Instructors</h2>
        <div className="grid md:grid-cols-3 mt-8 grid-cols-1 gap-8">
         <InstructorDiv></InstructorDiv>
         <InstructorDiv></InstructorDiv>
         <InstructorDiv></InstructorDiv>
         <InstructorDiv></InstructorDiv>
         <InstructorDiv></InstructorDiv>
         <InstructorDiv></InstructorDiv>
         <InstructorDiv></InstructorDiv>
        </div>
      </div>
    </div>
  );
};

export default OurInstructors;
