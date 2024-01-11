"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ImSpinner2 } from "react-icons/im";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setPhoneNumber, setPassWord } from "@/Store/LoginModalSlice/LoginModalSlice";




const LoginPages = [
    { item: 'number and password' },
    { item: 'success' },
];

function LoginModel() {

    const dispatch = useDispatch();
    const { phoneNumber, password } = useSelector(state => state.loginModal);

    const [animationDir, setAnimationDir] = useState(1);
    const [loading, setLoading] = useState(false);

    const enterFrom = animationDir === -1 ? "-100%" : "100%";
    const enterTo = "0";
    const leaveFrom = "0";
    const leaveTo = animationDir === 1 ? "-100%" : "100%";


    const requestLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber, password }),
            };
            const response = await fetch("https://student-course-backend.onrender.com/api/login", data);

            if (response.status === 200) {
                const res = await response.json();
                console.log(res);
                setLoading(false);
            }
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    };


    return (
        <div>
            <Transition
                appear={true}
                show={true}
                enter="transition-all duration-300"
                enterFrom={`opacity-0 translate-x-[${enterFrom}]`}
                enterTo="opacity-100 translate-x-0"
                leave="transition-all duration-300"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo={`opacity-0 translate-x-[${leaveTo}]`}
            >
                <div className="w-full h-full">
                    {/* ... (PageNavigation component) */}
                    <h1 className="text-2xl font-semibold text-primary mb-1 text-center">Welcome Back</h1>
                    <p className="text-lg font-medium text-primary text-center">Login to your account</p>
                    <form className="mt-6" onSubmit={requestLogin}>
                        <div className="relative flex flex-col gap-2">
                            <label
                                htmlFor="number"
                                className=""
                            >
                                Phone number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                className="border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3"
                                onChange={e => { dispatch(setPhoneNumber(e.target.value)) }}
                                value={phoneNumber}
                            />
                        </div>

                        <div className="relative flex flex-col gap-2 mt-4">
                            <label
                                htmlFor="password"
                                className=""
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary px-3"
                                onChange={e => { dispatch(setPassWord(e.target.value)) }}
                                value={password}
                            />
                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className={`btn btn-primary rounded border-2 text-white mt-6 mx-auto disabled:bg-gray-400 disabled:text-primary ${loading ? "cursor-not-allowed" : ""
                                    }`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <ImSpinner2 className="animate-spin text-lg" />
                                ) : (
                                    <span className="flex items-center">
                                        login
                                    </span>
                                )}
                            </button>

                        </div>
                    </form>
                </div>
            </Transition>
        </div>
    );
}

export default LoginModel;
