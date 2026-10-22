// store.js: creates the central Redux store.
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../tasks/tasksSlice";

// configureStore() registers tasksReducer under the key tasks
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});