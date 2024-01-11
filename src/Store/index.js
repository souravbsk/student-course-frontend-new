import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
import LoginModalSlice from "./LoginModalSlice/LoginModalSlice";
import RegisterModalSlice from "./RegisterModalSlice/RegisterModalSlice"
const persistConfig = {
    key:"root",
    storage
}

const reducer = combineReducers({
    loginModal:LoginModalSlice,
    registerModal:RegisterModalSlice
});

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;