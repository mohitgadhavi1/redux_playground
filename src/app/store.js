import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterCopyReducer from "../features/counterCopy/counterCopySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterCopy: counterCopyReducer,
  },
});
