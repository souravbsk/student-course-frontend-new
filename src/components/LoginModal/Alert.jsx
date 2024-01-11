"use client";
import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

const Alert = ({ alertText, type, setAlert }) => {

  React.useEffect(() => {
    setTimeout(() => {
      setAlert(old => { return { ...old, visibility: false } });
    }, 6000);
  }, []);


  let bgColorClass = '';

  if (type === 'warning') {
    bgColorClass = 'bg-yellow-500';
  } else if (type === 'error') {
    bgColorClass = 'bg-red-500';
  } else if (type === 'success') {
    bgColorClass = 'bg-green-500';
  }




  return (
    <div className={`absolute ${bgColorClass} px-4 py-2 mx-auto rounded-md flex items-center left-[50%] translate-x-[-50%] translate-y-[-30px] shadow-lg`}>
      {(type === 'error' || type === 'warning') &&
        <AiOutlineWarning className='text-white mr-2 mb-1 shrink-0' />}
      {(type === 'success') && 
        <FaCheck className='text-white mr-2 mb-1 shrink-0' />}
      <span className='text-white'>{alertText}</span>
    </div>
  )
}

export default Alert;
