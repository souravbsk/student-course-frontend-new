"use client";
import React, { useEffect } from "react";
import RegisterModel from './RegisterModel';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen as setRegisterModalOpen } from '@/Store/RegisterModalSlice/RegisterModalSlice';
import { setOpen as setLoginModalOpen } from '@/Store/LoginModalSlice/LoginModalSlice';
import LoginModel from './LoginModal';

const AuthModelLayout = () => {

  const dispatch = useDispatch();
  const isRegisterDialogOpen = useSelector(state => state.registerModal).isOpen;
  const isLoginDialogOpen = useSelector(state => state.loginModal).isOpen;

  const handleBackDropClick = () => {
    isRegisterDialogOpen && dispatch(setRegisterModalOpen(false));
    isLoginDialogOpen && dispatch(setLoginModalOpen(false));
  };

  useEffect(() => {
    if (isRegisterDialogOpen || isLoginDialogOpen) {
      document.body.classList.add('no-scroll-bg');
    } else {
      document.body.classList.remove('no-scroll-bg');
    }
    return () => {
      document.body.classList.remove('no-scroll-bg');
    };
  }, [isRegisterDialogOpen, isLoginDialogOpen]);

  return (
    <>
      {(isRegisterDialogOpen || isLoginDialogOpen) && (
        <>
          <div className="fixed z-40 inset-0 bg-black/60" onClick={handleBackDropClick}>
          </div>
          <div className="modal-scroll-bar fixed z-50 bg-slate-100 max-w-full w-[95%] sm:w-[80%] md:w-[500px] top-[50px] left-[50vw] translate-x-[-50%] rounded-lg border-2 max-h-[80vh] overflow-x-hidden overflow-y-auto px-4 md:px-8 py-3 md:py-6">
          {/* <div className="fixed z-50 bg-slate-100 max-w-full w-[95%] md:w-[40vw] md:max-w-[600px] top-[50px] left-[50vw] translate-x-[-50%] rounded-lg border-2 max-h-[550px] min-h-[400px] overflow-x-hidden overflow-y-auto pt-10 px-8 py-6"> */}
            {isRegisterDialogOpen && <RegisterModel />}
            {isLoginDialogOpen && <LoginModel />}
          </div>
        </>
      )}
    </>
  )
}

export default AuthModelLayout
