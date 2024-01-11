import React, { useState } from 'react';
import { FaAngry, FaFrown, FaLaugh, FaMeh, FaSmile } from 'react-icons/fa';



const feedbackResponses = [
  { id: 1, response: 'Very Bad', icon: FaAngry },
  { id: 2, response: 'Bad', icon: FaFrown },
  { id: 3, response: 'Average', icon: FaMeh },
  { id: 4, response: 'Good', icon: FaSmile },
  { id: 5, response: 'Very Good', icon: FaLaugh },
];

const Feedback = () => {
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [hoveredResponse, setHoveredResponse] = useState(null);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [suggestionText, setSuggestionText] = useState('');

  return (
    <div className='bg-gray-100 py-3 px-5'>
      {!isFeedbackSubmitted &&
        (
          <>
            <div className='mt-6'>
              <h4 className='font-medium text-lg text-black mb-4 text-center'>What is your opinion on this tutorial?</h4>
              <div className="face-buttons flex gap-4 justify-center items-center">
                {feedbackResponses.map((response) => (
                  <button
                    key={response.id}
                    className='relative text-gray-400 text-4xl hover:text-yellow-500 transition-all duration-300'
                    style={{ color: (hoveredResponse === response.id) || (selectedResponse === response.id) ? 'rgb(234 179 8)' : 'rgb(156 163 175)' }}
                    onMouseEnter={() => setHoveredResponse(response.id)}
                    onMouseLeave={() => setHoveredResponse(null)}
                    onClick={() => setSelectedResponse(response.id)}
                  >
                    <response.icon />
                    {hoveredResponse === response.id && (
                      <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 opacity-100 transition-opacity duration-300">
                        <p className='text-sm font-medium text-white p-1 rounded-md bg-gray-500 whitespace-nowrap'>{response.response}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <hr className='mt-3' />
        

      {selectedResponse !== null && selectedResponse <= 3 &&
        (<div className='mt-4'>
          <h4 className='font-medium text-lg text-black mb-4 text-left'>Any suggestions?</h4>
          <div className="suggestions">
            <textarea
              className='w-full border-2 border-gray-500 rounded-md p-2 outline-none text-gray-800'
              placeholder='Write your suggestions here'
              rows={5}
              value={suggestionText}
              onChange={(e) => setSuggestionText(e.target.value)}
            />
          </div>
        </div>)}
      
      <div className="submit-feedback flex justify-center mt-2">
        <button className="btn btn-primary rounded-md" onClick={() => setIsFeedbackSubmitted(true)}>Submit Feedback</button>
      </div>
        </>
        )}


      <div className="feed-back-sumitted mt-6">
        {isFeedbackSubmitted && (
          <div className="flex flex-col items-center justify-center">
            <FaSmile className='text-6xl text-green-500' />
            <h4 className='font-medium text-lg text-black mb-4 text-center'>Thank you for your feedback!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
