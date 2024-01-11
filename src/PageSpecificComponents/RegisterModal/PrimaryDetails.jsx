"use client";
import React, { useState } from 'react'
import { Transition } from '@headlessui/react';
import PreviousPageNavigation from './PreviousPageNavigation';
import { FaGoogle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, setOpen } from '@/Store/RegisterModalSlice/RegisterModalSlice';
import { setOpen as setLoginModalOpen } from '@/Store/LoginModalSlice/LoginModalSlice';
import { signIn, signOut, useSession } from 'next-auth/react';

const PrimaryDetails = ({ paginationProps }) => {

  // const session = useSession();
  // console.log(session);

  const { page, enterFrom, leaveTo, setPage, setAnimationDir } = paginationProps;

  const dispatch = useDispatch();
  const selector = useSelector(state => state.registerModal);
  const [firstNameValidation, setFirstNameValidation] = useState("");

  const submitPrimaryDetails = (e) => {
    e.preventDefault();
    !(selector.firstName).trim()
      ? setFirstNameValidation("First name is required")
      : setFirstNameValidation("");

    if (firstNameValidation) return;
    setPage(page => page + 1);
  }

  return (
    <Transition
      appear={true}
      show={page === 0}
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

        <h1 className='text-2xl font-semibold text-primary mb-1'>
          Welcome User
        </h1>
        <p className='text-lg font-medium text-primary'>
          Personal details
        </p>
        <form className='mt-2' onSubmit={submitPrimaryDetails}>
          <div className='relative flex flex-col '>
            <label htmlFor="first-name" className={``}>
              First name *
            </label>
            <input type="text" name="first-name" id="first-name" className='border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3'
              onChange={e => {
                dispatch(setFirstName(e.target.value));
              }}
              value={selector.firstName}
              required
            />
            <p className="text-sm text-red-500">{firstNameValidation}</p>
          </div>

          <div className='relative flex flex-col gap-2 mt-2'>
            <label htmlFor="last-name" className=''>
              Last name
            </label>
            <input type="text" name="last-name" id="last-name" className='border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3'
              onChange={e => {
                dispatch(setLastName(e.target.value));
              }}
              value={selector.lastName}
            />
          </div>
          <div className="flex flex-col bg-green items-center gap-2 md:gap-4 mt-4">
            <button type='submit' className='btn btn-primary rounded border-2 text-white'>continue</button>
            <div className='flex'>
              <p className='text-sm text-gray-500'>Already have an account?</p>
              <button type='button' className="text-sm font-semibold text-primary ml-2 hover:underline" onClick={() => {
                dispatch(setOpen(false)); dispatch(setLoginModalOpen(true)); console.log("Login modal opened");
              }} >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center gap-2 my-2 md:my-4">
          <div className="border border-gray-400 h-0 flex-1" />
          <p className='text-center'>or</p>
          <div className="border border-gray-400 h-0 flex-1" />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <button
            type="button"
            className="btn btn-primary rounded border-2 text-white  mx-auto"
            onClick={() => {signIn("google")}}
          >
            <span className="flex items-center">
              <FaGoogle className="text-xl" />
              <span className="ml-2">Continue with Google</span>
            </span>
          </button>
        </div>
      </div>
    </Transition >
  )
}

export default PrimaryDetails
