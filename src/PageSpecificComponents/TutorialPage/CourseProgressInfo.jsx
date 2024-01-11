import React from 'react'
import ChaptersDiv from './ChaptersDiv';

const CourseProgressInfo = ({ progressAmount, tutorialData }) => {
    const modules = tutorialData.plan.modules;
    return (
        <div className="w-full md:w-auto md:flex-0 flex flex-col min-w-[300px] px-2 lg:px-4 mt-6 lg:mt-0 bg-gray-100 lg:bg-transparent rounded py-4 lg:pt-0">
            <div className='mb-4'>
                <div className="progress-heading">
                    <h3 className="text-2xl font-semibold text-gray-700">
                        Course Progress:
                    </h3>
                </div>
                <progress className="progress progress-primary w-full mt-4" value={`${progressAmount}`} max={`${100}`} >50</progress>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <h4 className='w-full text-ld font-semibold text-gray-600'>
                    Total Modules: {modules.length}
                </h4>
                {modules.map((module, index) => (
                    <ChaptersDiv key={index} module={module} duration={8} index={index} />
                ))}
            </div>
        </div>
    )
}

export default CourseProgressInfo
