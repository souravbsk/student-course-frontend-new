"use client";
import Image from "next/image";
import React from "react";
const CourseDetials = ({
  formData,
  handleChange,
  coursePreviewImageUrl,
  handleCourseImageUplaod,
}) => {
  const courseImageRef = React.useRef(null);
  const handlePsudoButtonClick = (e) => {
    e.preventDefault();
    courseImageRef.current.click();
  };
  return (
    <div className="course-detials mb-8 bg-slate-100 border p-4 rounded-md">
      <h3 className="text-xl font-medium">Course Details</h3>
      <hr className="border-[1px] border-gray-300" />
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 my-4">
        <div className="flex-1">
          <label
            htmlFor="courseTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Course Title
          </label>
          <input
            type="text"
            id="courseTitle"
            name="courseTitle"
            value={formData.courseTitle}
            onChange={handleChange}
            className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="courseCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Course Category
          </label>
          <input
            type="text"
            id="courseCategory"
            name="courseCategory"
            value={formData.courseCategory}
            onChange={handleChange}
            className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 mb-4">
            <div className="flex-1">
              <label
                htmlFor="authorTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Week
              </label>
              <input
                type="text"
                id="week"
                min={0}
                name="week"
                value={formData.week}
                onChange={handleChange}
                className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="authorTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Hours of Video
              </label>
              <input
                type="text"
                id="hoursofvideo"
                name="hoursofvideo"
                value={formData.hoursofvideo}
                onChange={handleChange}
                className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="authorTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border-2"
            />
            
          </div>
        </div>

        <div className="mb-4 border-dashed border-4 border-gray-300 rounded-lg p-2 bg-gray-100">
          <div className="wrapper w-full h-full flex flex-row items-center justify-between gap-4 ">
            {coursePreviewImageUrl && (
              <div className="preview grow flex flex-col gap-2 items-center max-w-[50%]">
                <Image
                  width={150}
                  height={150}
                  src={coursePreviewImageUrl}
                  alt="Placeholder"
                  className="w-[150px] "
                />
                <p className="image-name text-xs">{formData.courseImg.name}</p>
              </div>
            )}
            <div className="file-upload grow">
              <label
                htmlFor="courseImage"
                className="text-sm font-medium text-gray-700 flex flex-col justify-between items-center gap-5"
              >
                <h5 className="text-lg font-medium">Course Image</h5>
                <input
                  type="file"
                  id="courseImage"
                  name="courseImage"
                  className="mt-1 hidden"
                  onChange={handleCourseImageUplaod}
                  ref={courseImageRef}
                />
                <button
                  className="btn-sm btn-primary block rounded"
                  onClick={handlePsudoButtonClick}
                >
                  upload image
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetials;
