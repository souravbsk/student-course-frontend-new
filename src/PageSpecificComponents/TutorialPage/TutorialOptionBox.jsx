import React from 'react'
import OptionBoxButton from './OptionBoxButton'
import Overview from './Overview';
import Assets from './Assets';
import Discussion from './Discussion';
import Feedback from './Feedback';


const TutorialOptionBox = ({ hiddenMenu, setHiddenMenu, Menus, tutorialData, currentChapterIndex }) => {

    return (
        <div className='mt-2'>

            <div className="tutorial-title">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                    {`${currentChapterIndex+1}. ${tutorialData.plan.modules[currentChapterIndex]}`}
                </p>
            </div>

            <div className="options overflow-x-auto md:flex-wrap flex justify-start gap-2">
                {Menus.map((buttonData, index) => (
                    <OptionBoxButton key={index} data={{ hiddenMenu, setHiddenMenu, buttonData }} />
                ))}
            </div>

            <div className="content mt-4">
                {hiddenMenu === 1 && <Overview data={tutorialData.description} />}
                {hiddenMenu === 2 && <Assets />}
                {hiddenMenu === 3 && <Discussion />}
                {hiddenMenu === 4 && <Feedback />}
            </div>
        </div>
    )
}


export default TutorialOptionBox
