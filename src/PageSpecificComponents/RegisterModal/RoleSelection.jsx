import React from 'react'
import { Transition } from '@headlessui/react';
import PreviousPageNavigation from './PreviousPageNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { setRole } from '@/Store/RegisterModalSlice/RegisterModalSlice';


const RoleSelection = ({ paginationProps }) => {
  const { page, enterFrom, leaveTo, setPage, setAnimationDir, ...other } = paginationProps;

  const dispatch = useDispatch();
  const { role } = useSelector(state => state.registerModal);

  const submitRole = () => {
    setPage(page => page + 1);
  }

  return (
    <Transition
      show={page === 1}
      enter="transition-all duration-300"
      enterFrom={`opacity-0 translate-x-[${enterFrom}]`}
      enterTo="opacity-100 translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo={`opacity-0 translate-x-[${leaveTo}]`}
    >
      <div className="w-full h-full">
        <PreviousPageNavigation
          setPage={setPage}
          pageNumber={page}
          setDirection={setAnimationDir} />

        <h1 className="text-2xl font-semibold text-primary mb-1">
          Select Your Role
        </h1>
        <div className="flex flex-col gap-2 mt-4">
          <label className={`inline-flex items-center w-full justify-between px-6 py-3 rounded-lg border-primary border-2 bg-slate hover:bg-primary hover:text-white text-lg transition-all duration-200 ${role === "student" ? "bg-primary text-white" : "bg-transparent text-black"} `}>
            <input
              type="radio"
              name="role"
              value="student"
              className="form-radio h-5 w-5 text-primary"
              onChange={() => dispatch(setRole('student'))}
              checked={role === 'student'}
            />
            <span className="ml-2">Student</span>
          </label>
          <label className={`inline-flex items-center w-full justify-between px-6 py-3 rounded-lg border-primary border-2 bg-slate hover:bg-primary hover:text-white text-lg transition-all duration-200 ${role === "teacher" ? "bg-primary text-white" : "bg-transparent text-black"} `}>
            <input
              type="radio"
              name="role"
              value="teacher"
              className="form-radio h-5 w-5 text-primary"
              onChange={() => dispatch(setRole('teacher'))}
              checked={role === 'teacher'}
            />
            <span className="ml-2">Teacher</span>
          </label>
        </div>
        <div className="flex flex-row bg-green items-center mt-6">
          <button onClick={submitRole} className='btn btn-primary rounded border-2 text-white ml-auto'>next</button>
        </div>
      </div>
    </Transition>
  )
}

export default RoleSelection
