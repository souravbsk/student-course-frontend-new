'use client';
import React, {useState} from "react";
import CourseProgressInfo from "@/PageSpecificComponents/TutorialPage/CourseProgressInfo";
import TutorialOptionBox from "@/PageSpecificComponents/TutorialPage/TutorialOptionBox";
import VideoBox from "@/PageSpecificComponents/TutorialPage/VideoBox";
import CourseList from "@/FakeData/CourseData";


const Menus = [
    {id: 1, name: "overview"},
    {id: 2, name: "assets"},
    {id: 3, name: "ask doubts"},
    {id: 4, name: "feedback"},
];

export default function VideoTutorial({params}) {
    const [hiddenMenu, setHiddenMenu] = useState(Menus[0].id);
    const [progressAmount, setProgressAmount] = useState(20);
    const tutorialData = CourseList.find((item) => item.id === Number(params.videoslug));

    return (
        <section className="mt-32">
            <div className="container">

                <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
                    <div className="primary-box flex flex-col items-stretch gap-2 flex-1">
                        <VideoBox title={tutorialData.courseTitle}/>
                        <TutorialOptionBox hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} Menus={Menus}
                                           tutorialData={tutorialData} currentChapterIndex={1}/>
                    </div>
                    <CourseProgressInfo progressAmount={progressAmount} tutorialData={tutorialData}/>
                </div>
            </div>
        </section>
    )
}