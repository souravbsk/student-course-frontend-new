import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  phoneNumber: "",
  password: "",
  role: "",
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setShowOtpField: (state, action) => {
      state.showOtpField = action.payload;
    },
    setPassWord: (state, action) => {
      state.password = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    }
  },
});

export const { setOpen, setPhoneNumber, setPassWord, setRole} = loginModalSlice.actions;
export default loginModalSlice.reducer;
