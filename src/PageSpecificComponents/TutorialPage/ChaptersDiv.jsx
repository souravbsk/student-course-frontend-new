import React from 'react'
import { FaClock } from 'react-icons/fa'

const ChaptersDiv = ({ index, module, duration }) => {
  return (
    <div className='px-3 py-2 md:p-2 flex flex-col bg-gray-1 bg-slate-100 rounded-md border'>
      <h6 className="video-name text-gray-800">
        {index + 1}. {module}
      </h6>
      <div className="duration flex items-center text-gray-800 gap-2">
        <FaClock className='inline text-gray-800 text-sm'/>
        <span>{duration}hrs</span>
      </div>
    </div>
  )
}

export default ChaptersDiv
