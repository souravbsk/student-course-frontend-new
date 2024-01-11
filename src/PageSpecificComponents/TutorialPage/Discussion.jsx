import React, { useState } from 'react'
import ChatDiv from './ChatDiv'
import { AiOutlineReload} from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';


const Comments = [
  { id: 1, image: 'https://picsum.photos/200', name: 'Instructor', comment: 'Hello! How can I assist you with your doubts today?' },
  { id: 2, image: 'https://picsum.photos/200', name: 'You', comment: 'Hi there! I have a question about the concept you explained in the video. Can you please elaborate a bit more?' },
  { id: 3, image: 'https://picsum.photos/200', name: 'Instructor', comment: "Of course! I'd be happy to help. Please go ahead and ask your question."},
  { id: 4, image: 'https://picsum.photos/200', name: 'You', comment: "I didn't quite understand the part where you talked about advanced topics. Could you provide some examples to make it clearer?" },
  { id: 5, image: 'https://picsum.photos/200', name: 'Instructor', comment: 'Sure thing! Let me give you some real-world examples to illustrate those advanced concepts better.' },
  { id: 6, image: 'https://picsum.photos/200', name: 'You', comment: 'Thank you so much for explaining it with examples. Its much clearer now!' },
  { id: 7, image: 'https://picsum.photos/200', name: 'Instructor', comment: 'You are welcome! I am here to help you anytime. If you have any more questions or doubts, feel free to ask.' },
  { id: 8, image: 'https://picsum.photos/200', name: 'You', comment: 'I appreciate your support and guidance. This tutorial has been really helpful for me.' },
];



const Discussion = () => {
  // const [commentText, setCommentText] = useState('');

  return (
    <div>
      <h1 className='font-medium text-xl text-gray-700'>Discussion</h1>
      <div className="discussion-box mt-2">
        <form>
          <div className="flex items-center gap-2">
            <input type="text" placeholder='Write your comment here' className='w-full border-2 border-gray-500 rounded-md p-2 outline-none text-gray-800' />
            <button className="btn btn-primary rounded-full"><FaArrowRight /></button>
          </div>
        </form>

        <div className="old-discussions max-h-[500px] overflow-auto bg-gray-200 p-2 rounded-md mt-2">
          {Comments.map((comment, index) => (
            <ChatDiv key={index} data={{ ...comment, date: "27 sep 2002" }} />
          ))}
          <div className="flex items-center justify-center">
            <button className="btn-sm btn-primary rounded-md">
              <AiOutlineReload className='text-xl' />
              <span className='ml-2'>load more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussion
