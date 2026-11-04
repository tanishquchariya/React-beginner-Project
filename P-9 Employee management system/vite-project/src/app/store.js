// store.js
// configureStore() :- Create the Redux stor
import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "../features/employees/employeeSlice";

// reducers	Define state update operations
export const appStore = configureStore({
    reducer:{
        employees: employeeReducer,
    }
})