import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import loginSlice from "../reducers/loginSlice";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whiteList: ["login"],
};

const rootReducers = combineReducers({
  login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
