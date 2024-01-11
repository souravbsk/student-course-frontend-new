import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    firstName: "",
    lastName: "",
    role: "",
    stdCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
};

const RegisterModalSlice = createSlice({
    name: "registerModal",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setStdCode: (state, action) => {
            state.stdCode = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
        resetCriticalData: (state) => {
            state.password = "";
            state.confirmPassword = "";
        }
    },
});


export const {
    setOpen,
    setFirstName,
    setLastName,
    setRole,
    setStdCode,
    setPhoneNumber,
    setPassword,
    setConfirmPassword,
    setShowOtpField,
    setOTPCode,
    resetCriticalData } = RegisterModalSlice.actions;

export default RegisterModalSlice.reducer;
