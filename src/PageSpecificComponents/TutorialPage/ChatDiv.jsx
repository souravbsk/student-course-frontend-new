"use client";
import React from 'react'

const ChatDiv = ({ data }) => {
  const { image, name, comment, date } = data;
  const [readMore, setReadMore] = React.useState(comment.length > 100 ? true : null);
  return (
    <div className="chat flex items-center bg-gray-50 rounded-md p-2 mb-2 gap-4">
      <div className="chat-image flex-0 self-start max-w-[60px] max-h-[60px] overflow-hidden rounded-full">
        <img src={image} alt="user" className='w-full h-full' />
      </div>

      <div className="w-full chat-info flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h5 className='font-base text-lg text-black'>{name}</h5>
          <p className='font-base text-sm text-gray-500'>{date}</p>
        </div>
        <hr className='border-gray-300' />
        <p className='font-base text-md text-black'>
          {readMore ? `${comment.slice(0, 100)}...` : comment}
        </p>

        <div className="options flex gap-1">
          <button className='text-gray-500 hover:text-gray-800 py-1 mr-2 rounded-md'>Reply</button>
          <button className='text-gray-500 hover:text-gray-800 py-1 mr-2 rounded-md'>Delete</button>
          {readMore !== null &&
            (<button className='text-gray-500 hover:text-gray-800 px-2 py-1 rounded-md'
              onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Read More' : 'Read Less'}
            </button>)}
        </div>
      </div>
    </div>
  )
}

export default ChatDiv
