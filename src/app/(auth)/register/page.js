"use client";
import { useRef, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { BiArrowBack } from 'react-icons/bi'
import { IoArrowForwardOutline, IoClose } from 'react-icons/io5'
import { ImSpinner2 } from 'react-icons/im'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOpen,
  setFirstName,
  setLastName,
  setRole,
  setPhoneNumber,
  setPassword,
  setConfirmPassword,
  setShowOtpField,
  setOTPCode
} from '@/Store/RegisterModalSlice/RegisterModalSlice';
import { AiFillGoogleCircle } from 'react-icons/ai';
// import { signIn, useSession } from 'next-auth/react';


const RegisterPages = [
  { item: 'first last name', },
  { item: 'role' },
  { item: 'emain and password' },
  { item: 'otp verification' },
  { item: 'success' },
];

// remember page number start from 0;
// const PageNavigation = ({ pageNumber, setPage, maxPage, total, setDirection }) => {
//     const handlePagination = (direction) => () => {
//         if (direction === -1 && pageNumber === 0 ||
//             direction === 1 && pageNumber === total - 1 ||
//             direction === 1 && pageNumber === maxPage) return;
//         setDirection(direction);
//         if (direction === -1) {
//             setPage((old) => old - 1);
//         } else {
//             setPage((old) => old + 1);
//         }
//     };
//     const [prevButtonColor, setPrevButtonColor] = useState(pageNumber === 0 ? "bg-gray-300 text-primary" : "bg-primary text-white")
//     const [nextButtonColor, setNextButtonColor] = useState(((pageNumber === total - 1) || (pageNumber === maxPage)) ? "bg-gray-300 text-primary" : "bg-primary text-white")

//     useEffect(() => {
//         console.log(pageNumber, maxPage);
//         console.log(prevButtonColor, nextButtonColor);
//         setPrevButtonColor(pageNumber === 0 ? "bg-gray-300 text-primary" : "bg-primary text-white")
//         setNextButtonColor(((pageNumber === total - 1) || (pageNumber === maxPage)) ? "bg-gray-300 text-primary" : "bg-primary text-white")
//     }, [pageNumber, maxPage]);
//     return (
//         <div className="model-navigation w-full mb-8">
//             <div className="flex items-center justify-between gap-2">
//                 <button
//                     className={`rounded-full p-2 shadow-sm hover:bg-parimary hover:text-whtie hover:scale-80 transition-transform duration-150 ${prevButtonColor}`}
//                     onClick={handlePagination(-1)}
//                 >
//                     <BiArrowBack />
//                 </button>
//                 <button
//                     className={`rounded-full p-2 shadow-sm hover:bg-parimary hover:text-whtie hover:scale-80 transition-transform duration-150 ${nextButtonColor}`}
//                     onClick={handlePagination(1)}
//                 >
//                     <IoArrowForwardOutline />
//                 </button>
//             </div>
//         </div>
//     );
// };

const PreviousPageNavigation = ({ pageNumber, setPage, setDirection }) => {
  const dispatch = useDispatch();
  const handlePreviousPage = () => {
    console.log("click to chal rha hai");
    if (pageNumber === 0) return;
    setDirection(-1);
    setPage((old) => old - 1);
  };
  return (
    <div className="model-navigation w-full mb-8">
      <div className="flex items-center justify-between gap-2">
        <button
          className={`rounded-full p-2 shadow-sm hover:bg-parimary hover:text-whtie hover:scale-80 transition-all duration-150 ${pageNumber === 0 ? "bg-gray-300 text-gray-100" : "bg-primary text-white hover:scale-95"}`}
          onClick={handlePreviousPage}
        >
          <BiArrowBack />
        </button>
        <button
          className={`rounded-full p-2 shadow-sm hover:bg-parimary hover:text-whtie hover:scale-80 transition-all duration-150 text-white bg-primary hover:bg-red-600 hover:scale-95`}
          onClick={() => { dispatch(setOpen(false)) }}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}

function RegisterModel({ stdCode }) {

  // const session = useSession();
  // console.log(session);

  const dispatch = useDispatch();
  const selector = useSelector(state => state.registerModal);

  const [page, setPage] = useState(0);
  const focusRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [animationDir, setAnimationDir] = useState(0);

  const enterFrom = animationDir === -1 ? "-100%" : "100%";
  const leaveTo = animationDir === 1 ? "-100%" : "100%";

  const [otp, setOtp] = useState([null, null, null, null, null, null]);
  const [firstNameValidation, setFirstNameValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState("");
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");


  const validateAll = () => {
    // First Name validation
    if (!(selector.firstName).trim()) {
      setFirstNameValidation("First name is required");
    } else {
      setFirstNameValidation("");
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(selector.password)) {
      setPasswordValidation("Password must be at least 8 characters and contain at least one letter, one number, and one special character (@$!%*#?&)");
    } else {
      setPasswordValidation("");
    }

    // Confirm Password validation
    if (!selector.confirmPassword) {
      setConfirmPasswordValidation("Confirm password is required");
    } else if (selector.confirmPassword !== selector.password) {
      setConfirmPasswordValidation("Passwords do not match");
    } else {
      setConfirmPasswordValidation("");
    }

    // Phone Number validation
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!selector.phoneNumber) {
      setPhoneNumberValidation("Phone number is required");
    } else if (!phoneNumberRegex.test(selector.phoneNumber)) {
      setPhoneNumberValidation("Invalid phone number format");
    } else {
      setPhoneNumberValidation("");
    }
  };

  const nextPage = (e) => {
    e && e.preventDefault();
    setAnimationDir(1);
    setPage(old => old + 1);
    console.log("page: ", page);
  }

  const submitPrimaryDetails = (e) => {
    e.preventDefault();
    // console.log("redux data: ", selector);
    // First Name validation
    !(selector.firstName).trim()
      ? setFirstNameValidation("First name is required")
      : setFirstNameValidation("");

    if (firstNameValidation) return;
    nextPage();
  }

  const submitMoreDetails = async (e) => {
    e.preventDefault();
    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!selector.password) {
      setPasswordValidation("Password is required");
      return
    }
    else if (!passwordRegex.test(selector.password)) {
      setPasswordValidation("Password must be at least 8 characters and contain at least one letter, one number, and one special character (@$!%*#?&)");
      return
    }
    else {
      setPasswordValidation("");
    }

    // Confirm Password validation
    if (!selector.confirmPassword) {
      setConfirmPasswordValidation("Confirm password is required");
      return;
    } else if (selector.confirmPassword !== selector.password) {
      setConfirmPasswordValidation("Passwords do not match");
      return;
    } else {
      setConfirmPasswordValidation("");
    }

    // Phone Number validation
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!selector.phoneNumber) {
      setPhoneNumberValidation("Phone number is required");
      return;
    } else if (!phoneNumberRegex.test(selector.phoneNumber)) {
      setPhoneNumberValidation("Invalid phone number format");
      return;
    } else {
      setPhoneNumberValidation("");
    }
    if (phoneNumberValidation || passwordValidation || confirmPasswordValidation) return;
    setLoading(true);

    const otpRequestBody = JSON.stringify({ phone: selector.phoneNumber });
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: otpRequestBody,
    };

    try {
      const varifyPhoneNumberResponse = await fetch('https://student-course-backend.onrender.com/api/sendOtp', requestData);

      console.log(varifyPhoneNumberResponse);
      if (varifyPhoneNumberResponse.ok) {
        setLoading(false);
        setPage((old) => old + 1);
        setAnimationDir(1);
      } else {
        console.log('Phone number verification failed');
      }
    } catch (error) {
      console.error('An error occurred while verifying phone number:', error);
    }
  };

  const requestOtp = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage(old => old + 1);
      setAnimationDir(1);
    }, 1000);
  }

  const goToSignUp = () => {
    ///
  }

  const signInWithGoogle = () => {
    // signIn('google');
  }

  return (
    <div>
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
          <form className='mt-6' onSubmit={submitPrimaryDetails}>
            <div className='relative flex flex-col gap-2'>
              <label htmlFor="first-name" className={``}>
                First name *
              </label>
              <input ref={focusRef} type="text" name="first-name" id="first-name" className='border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3'
                onChange={e => {
                  dispatch(setFirstName(e.target.value));
                }}
                value={selector.firstName}
                required
              />
              <p className="text-sm text-red-500">{firstNameValidation}</p>
            </div>

            <div className='relative flex flex-col gap-2 mt-4'>
              <label htmlFor="last-name" className=''>
                Last name
              </label>
              <input ref={focusRef} type="text" name="last-name" id="last-name" className='border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3'
                onChange={e => {
                  dispatch(setLastName(e.target.value));
                }}
                value={selector.lastName}
              />
            </div>
            <div className="flex flex-row bg-green items-center mt-6">
              <button type='button' className="text-3xl text-primary flex items-center gap-2" onClick={signInWithGoogle} >
                <AiFillGoogleCircle />
                <span className='text-sm'>Signup with Google</span>
              </button>
              <button type='submit' className='btn btn-primary rounded border-2 text-white ml-auto'>next</button>
            </div>
          </form>
          <div className="flex items-center gap-2 my-4">
            <div className="border border-gray-400 h-0 flex-1" />
            <p className='text-center'>or</p>
            <div className="border border-gray-400 h-0 flex-1" />
          </div>

          <div className="text-center mt-4">
            <button type='button' className='text-primary hover:underline' onClick={goToSignUp}>Do you already have an account?</button>
          </div>
        </div>
      </Transition >
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
            <label className={`inline-flex items-center w-full justify-between px-6 py-3 rounded-lg border-primary border-2 bg-slate hover:bg-primary hover:text-white text-lg transition-all duration-200 ${selector.role === "student" ? "bg-primary text-white" : "bg-transparent text-black"} `}>
              <input
                type="radio"
                name="role"
                value="student"
                className="form-radio h-5 w-5 text-primary"
                onChange={() => dispatch(setRole('student'))}
                checked={selector.role === 'student'}
              />
              <span className="ml-2">Student</span>
            </label>
            <label className={`inline-flex items-center w-full justify-between px-6 py-3 rounded-lg border-primary border-2 bg-slate hover:bg-primary hover:text-white text-lg transition-all duration-200 ${selector.role === "teacher" ? "bg-primary text-white" : "bg-transparent text-black"} `}>
              <input
                type="radio"
                name="role"
                value="teacher"
                className="form-radio h-5 w-5 text-primary"
                onChange={() => dispatch(setRole('teacher'))}
                checked={selector.role === 'teacher'}
              />
              <span className="ml-2">Teacher</span>
            </label>
          </div>
          <div className="flex flex-row bg-green items-center mt-6">
            <button onClick={nextPage} className='btn btn-primary rounded border-2 text-white ml-auto'>next</button>
          </div>
        </div>
      </Transition>
      <Transition
        show={page === 2}
        enter="transition-all duration-300"
        enterFrom={`opacity-0 translate-x-[${enterFrom}ter]`}
        enterTo="opacity-100 translate-x-0"
        leave="transition-all duration-300"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo={`opacity-0 translate-x-[${leaveTo}]`}
      >
        <div className="h-full w-full ">
          <PreviousPageNavigation
            setPage={setPage}
            pageNumber={page}
            setDirection={setAnimationDir} />

          {/* <h1 className='text-2xl font-semibold text-primary mb-1'></h1> */}
          <p className='text-lg font-medium text-primary'>More details</p>
          <form className='flex flex-col gap-4 my-6' onSubmit={submitMoreDetails}>
            <div className="flex flex-col items-center">
              <label htmlFor="number">
                Phone Number
              </label>
              <div className="flex">
                <select id="country-select" class="px-4 py-2 border"
                  onChange={e => setStdCode(e.target.value)}
                  value={stdCode}>
                  {
                    stdCode.map((item, index) => (
                      <option value={item.dial_code} key={index}>{item.name}</option>
                    ))
                  }
                </select>
                <input type="text" id="phone-number" placeholder="Enter your phone number" className="border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3" onChange={e => {
                  dispatch(setPhoneNumber(e.target.value));
                }}
                  value={selector.phoneNumber}
                  required />
              </div>
              <p className="text-sm text-red-500">{phoneNumberValidation}</p>
            </div>


            {/* Password Field */}
            <div className='relative flex flex-col gap-2'>
              <label htmlFor="password" className={``}>
                Password
              </label>
              <input type="password" name="password" id="password" className='border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3'
                onChange={e => {
                  dispatch(setPassword(e.target.value));
                }}
                value={selector.password}
                required
              />
              <p className="text-sm text-red-500">{passwordValidation}</p>
            </div>

            <div className='relative flex flex-col gap-2'>

              {/* Confirm Password Field */}
              <label htmlFor="confirm-password" className={``}>
                Confirm Password
              </label>
              <input type="password" name="confirm-password" id="confirm-password" className='border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3'
                onChange={e => {
                  dispatch(setConfirmPassword(e.target.value));
                }}
                value={selector.confirmPassword}
                required
              />
              <p className="text-sm text-red-500">{confirmPasswordValidation}</p>
            </div>

            <div className="flex items-center">
              <button
                type='submit'
                className={`btn btn-primary rounded border-2 text-white mt-6 ml-auto ${loading ? "cursor-not-allowed opacity-70" : ""
                  }`}
              > {loading ? <ImSpinner2 className="animate-spin" /> : "submit and continue"}
              </button>
            </div>
          </form>
        </div>
      </Transition >
      <Transition
        show={page === 3}
        enter="transition-all duration-300"
        enterFrom={`opacity-0 translate-x-[${enterFrom}ter]`}
        enterTo="opacity-100 translate-x-0"
        leave="transition-all duration-300"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo={`opacity-0 translate-x-[${leaveTo}]`}
      >
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
                <input type="number" name="digit1" id="digit1" min="0" max="9" className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={(e) => {
                    document.getElementById('digit2').focus();
                  }}
                />
                <input type="number" name="digit2" id="digit2" min="0" max="9" className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={(e) => {
                    document.getElementById('digit3').focus();
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace') {
                      e.preventDefault(); // Prevent default Backspace behavior
                      if (e.target.value === '') {
                        const prevInputId = e.target.id.substring(5); // Extract the current input's number
                        const prevInputNumber = parseInt(prevInputId) - 1;
                        if (prevInputNumber >= 1) {
                          document.getElementById(`digit${prevInputNumber}`).focus();
                        }
                      }
                    }
                  }}
                />
                <input type="number" name="digit3" id="digit3" min="0" max="9" className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={(e) => {
                    document.getElementById('digit4').focus();
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace') {
                      e.preventDefault(); // Prevent default Backspace behavior
                      if (e.target.value === '') {
                        const prevInputId = e.target.id.substring(5); // Extract the current input's number
                        const prevInputNumber = parseInt(prevInputId) - 1;
                        if (prevInputNumber >= 1) {
                          document.getElementById(`digit${prevInputNumber}`).focus();
                        }
                      }
                    }
                  }}
                />
                <input type="number" name="digit4" id="digit4" min="0" max="9" className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={(e) => {
                    document.getElementById('digit5').focus();
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace') {
                      e.preventDefault(); // Prevent default Backspace behavior
                      if (e.target.value === '') {
                        const prevInputId = e.target.id.substring(5); // Extract the current input's number
                        const prevInputNumber = parseInt(prevInputId) - 1;
                        if (prevInputNumber >= 1) {
                          document.getElementById(`digit${prevInputNumber}`).focus();
                        }
                      }
                    }
                  }}
                />
                <input type="number" name="digit5" id="digit5" min="0" max="9" className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={(e) => {
                    document.getElementById('digit6').focus();
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace') {
                      e.preventDefault(); // Prevent default Backspace behavior
                      if (e.target.value === '') {
                        const prevInputId = e.target.id.substring(5); // Extract the current input's number
                        const prevInputNumber = parseInt(prevInputId) - 1;
                        if (prevInputNumber >= 1) {
                          document.getElementById(`digit${prevInputNumber}`).focus();
                        }
                      }
                    }
                  }}
                />
                <input type="number" name="digit6" id="digit6" min="0" max="9" className='w-12 h-12 border-2 border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary no-increment'
                  onInput={e => {
                    document.getElementById('submit-otp-btn').focus();
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace') {
                      e.preventDefault(); // Prevent default Backspace behavior
                      if (e.target.value === '') {
                        const prevInputId = e.target.id.substring(5); // Extract the current input's number
                        const prevInputNumber = parseInt(prevInputId) - 1;
                        if (prevInputNumber >= 1) {
                          document.getElementById(`digit${prevInputNumber}`).focus();
                        }
                      }
                    }
                  }}
                />
              </div>
            </form>
            <div className="flex items-center">
              <button
                onClick={requestOtp}
                id='submit-otp-btn'
                className={`btn btn-primary rounded border-2 text-white mt-6 ml-auto ${loading ? "cursor-not-allowed opacity-70" : ""
                  }`}
              > {loading ? <ImSpinner2 className="animate-spin" /> : "next"}
              </button>
            </div>
          </div>
        </div>
      </Transition>
      {/* <Transition
        show={page === 4}
        enter="transition-all duration-300"
        enterFrom={`opacity-0 translate-x-[${enterFrom}]`}
        enterTo="opacity-100 translate-x-0"
        leave="transition-all duration-300"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo={`opacity-0 translate-x-[${leaveTo}]`}
      >
        <div className="h-full w-full ">

          <div className='relative flex flex-col gap-2'>
            <p className='text-lg font-medium text-primary'>
              Phone number Varified
            </p>
            <p className="text-sm font-base text-black">
              Your phone number has been verified successfully.
            </p>

            <div className="flex items-center justify-center">
              <Link className='btn btn-primary rounded border-2 text-white mt-2' href="/">
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      </Transition> */}

    </div >
  )
}

export default RegisterModel;