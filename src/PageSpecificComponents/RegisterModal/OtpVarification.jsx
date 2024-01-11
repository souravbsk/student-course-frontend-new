"use client";
import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from '@headlessui/react';
import PreviousPageNavigation from './PreviousPageNavigation';
import { ImSpinner2 } from 'react-icons/im';
import { useRouter } from 'next/navigation'
import { resetCriticalData, setOpen } from '@/Store/RegisterModalSlice/RegisterModalSlice';
import Alert from '@/components/LoginModal/Alert';

const OtpVarification = ({ paginationProps, stdCodeProps }) => {
  const { page, enterFrom, leaveTo, setPage, setAnimationDir, loading, setLoading } = paginationProps;

  const { selectedStdCode, setStdCode } = stdCodeProps;
  const [alert, setAlert] = useState({ visibility: false, alertText: '', type: '' });

  const router = useRouter();
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    role,
    phoneNumber,
    password, } = useSelector(state => state.registerModal);


  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Handle moving focus to the next input or previous input on Backspace
  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '') {
      e.preventDefault();
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const registerUser = async () => {
    const registerData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        role: 'student',
        phone: `${selectedStdCode}${phoneNumber}`,
        password: password,
      }),
    };

    try {
      const registerResponse = await fetch(`api/auth/register_student`, registerData);

      const data = await registerResponse.json();
      console.log(data);

      if (data.status) {
        console.log("User registered successfully!");
        dispatch(resetCriticalData());
        setLoading(false);
        setAlert({ visibility: true, alertText: "Registered Successfully", type: 'success' });
        setTimeout(() => {
          dispatch(setOpen(false));
        }, 5000);
        // router.push('/myCourses');
      } else {
        setAlert({ visibility: true, alertText: data.message, type: 'error' });
        console.log('User registration failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while registering user:', error);
    }
  }

  // changed to opposite of the logic to make the register process working.
  const requestValidateOtp = async (e) => {
    e.preventDefault();
    const inputOTP = inputRefs.map(ref => ref.current.value).join('');
    console.log("otp is: ", inputOTP, inputOTP.length);
    if (!inputOTP) {
      setAlert({ alertText: "Please enter otp", visibility: "true", type: "warning" });
      return;
    };

    console.log("otp request phone is: ", `+91${9811525897}`); // added for testing purpose only add ${selectedStdCode}${phoneNumber} in production
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: `${selectedStdCode}${phoneNumber}`, otp: inputOTP }),
    };

    setLoading(true);
    try {
      const verifyOtpResponse = await fetch('api/auth/varifyotp', requestData);
      const data = await verifyOtpResponse.json();
      console.log(data);

      if (data.success == true) {
        console.log("Phone number verified successfully!");
        registerUser();
      } else {
        setAlert({ alertText: data.message ? data.message : data.msg, type: 'warning', visibility: true });
        console.log('Phone number verification failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while verifying phone number:', error);
    }
  }



  return (
    <Transition
      show={page === 2}
      enter="transition-all duration-300"
      enterFrom={`opacity-0 translate-x-[${enterFrom}ter]`}
      enterTo="opacity-100 translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo={`opacity-0 translate-x-[${leaveTo}]`}
    >
      {alert.visibility &&
        <Alert alertText={alert.alertText} type={alert.type} setAlert={setAlert} />}

      <div className="h-full w-full ">
        <PreviousPageNavigation
          setPage={setPage}
          pageNumber={page}
          setDirection={setAnimationDir} />
        {/* ... (your existing elements) */}
        <div className='relative flex flex-col gap-2'>

          {/* Email Verification using OTP */}
          <p className='text-lg font-medium text-primary'>Phone number Verification</p>
          <p className="text-sm font-base text-black">An OTP has been sent to your mobile. Please enter it above.</p>
          <form className='relative flex flex-col gap-4 my-6'>
            <div className='flex justify-between gap-1'>
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  type="number"
                  name={`digit${index + 1}`}
                  id={`digit${index + 1}`}
                  min="0"
                  max="9"
                  ref={ref} // Attach the ref to the input
                  className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={(e) => {
                    if (index < inputRefs.length - 1) {
                      inputRefs[index + 1].current.focus(); // Move focus to the next input
                    }
                  }}
                  onKeyDown={(e) => handleBackspace(e, index)} // Handle Backspace
                />
              ))}
            </div>
          </form>

          <div className="flex items-center">
            <button
              onClick={requestValidateOtp}
              id='submit-otp-btn'
              className={`btn btn-primary rounded border-2 text-white mt-6 ml-auto ${loading ? "cursor-not-allowed opacity-70" : ""
                }`}
            > {loading ? <ImSpinner2 className="animate-spin" /> : "next"}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default OtpVarification
