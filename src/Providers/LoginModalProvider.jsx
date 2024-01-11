'use client'
import React, { createContext, useState } from 'react';

export const LoginContext = createContext("null")
const LoginModalProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <LoginContext.Provider value={[isOpen, setIsOpen]}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginModalProvider;