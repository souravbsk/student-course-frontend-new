"use client";
import store from "@/Store";
import React from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let persistor = persistStore(store);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
