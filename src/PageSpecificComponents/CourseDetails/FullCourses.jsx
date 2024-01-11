import React from 'react';

const FullCourses = ({course}) => {
    return (
        <div>
        <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          <div className="bg-[#4D1B4A] text-white py-5 px-3 md:px-5 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-semibold">
              {course?.duration}
            </p>
            <h4 className="font-medium">Week</h4>
          </div>
          <div className="bg-[#4D1B4A] text-white py-5 px-3 md:px-5 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-semibold">
              {course?.durationInHours}
            </p>
            <h4 className="font-medium">hours</h4>
          </div>
          <div className="bg-[#4D1B4A] text-white py-5 px-3 md:px-5 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-semibold">
              {course?.modules?.length}
            </p>
            <h4 className="font-medium">lecture</h4>
          </div>
          <div className="bg-[#4D1B4A] text-white py-5 px-3 md:px-5 rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-semibold">
              {0}
            </p>
            <h4 className="font-medium">assignment</h4>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl text-[#502048] font-bold">modules</h3>
          <ul className="mt-2 list-inside list-disc">
            {course?.modules?.map((modules) => (
              <li key={modules?.id}>{modules?.title}</li>
            ))}
          </ul>
        </div>
        {/* <div className="mt-6">
          <h3 className="text-xl text-[#502048] font-bold">
            Assignment
          </h3>
          <ul className="mt-2 list-inside list-disc">
            {course?.plan?.bonusFeature?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div> */}
      </div>
    );
};

export default FullCourses;