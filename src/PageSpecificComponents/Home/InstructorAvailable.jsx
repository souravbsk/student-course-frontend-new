import React from "react";
import instructor from "@/assets/home/instructor/instructor.png";
import Image from "next/image";
const InstructorAvailable = () => {
  return (
    <section className="mt-16 sm:mt-32">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row py-8 md:py-16 items-stretch gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              We Have The Best Instructors Available in The City
            </h3>
            <p className="text-slate-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique
            </p>
            <ul className="max-w-md space-y-3 text-[#E06C0D] list-inside ">
              <li className="flex items-center text-base  text-slate-700">
                <svg
                  className="w-5 h-5 mr-1.5 text-[#E06C0D]  flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Full Lifetime Access
              </li>
              <li className="flex items-center  text-base  text-slate-700">
                <svg
                  className="w-5 h-5 mr-1.5 text-[#E06C0D]  flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                20+ Downloadable Resources
              </li>
              <li className="flex items-center  text-base  text-slate-700">
                <svg
                  className="w-5 h-5 mr-1.5 text-[#E06C0D]  flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Certificate Of Completion
              </li>
              <li className="flex items-center  text-base  text-slate-700">
                <svg
                  className="w-5 h-5 mr-1.5 text-[#E06C0D]  flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Free Trial 7 Days
              </li>
            </ul>
            <div className="grid-cols-2 gap-4 grid mt-12 md:grid-cols-2 lg:grid-cols-3  md:gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-primary">32+</h2>
                <p className="text-slate-700">Mock Interviews (with selected course plans)</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary">32+</h2>
                <p>Mock Interviews (with selected course plans)</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary">32+</h2>
                <p>Mock Interviews (with selected course plans)</p>
              </div>
            </div>
            <button className="bg-[#FB7818] text-sm text-white font-semibold px-6 py-3 rounded-md">
              Enroll Today
            </button>
          </div>
          <div className="flex-1">
            <Image src={instructor} alt="instructor" className="w-full"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorAvailable;
