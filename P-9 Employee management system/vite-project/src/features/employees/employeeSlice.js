import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    {
      id: "EMP001",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      department: "Engineering",
      position: "Frontend Developer",
      joiningDate: "12 Jan 2025",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Priya Verma",
      email: "priya@gmail.com",
      department: "HR",
      position: "HR Manager",
      joiningDate: "05 Mar 2024",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Aman Singh",
      email: "aman@gmail.com",
      department: "Finance",
      position: "Accountant",
      joiningDate: "18 Jun 2025",
      status: "Inactive",
    },
    {
      id: "EMP004",
      name: "Neha Gupta",
      email: "neha@gmail.com",
      department: "Marketing",
      position: "Marketing Executive",
      joiningDate: "20 Aug 2024",
      status: "Active",
    }
  ],
};

// createSlice() :- Define state and reducers
// reducers	Define state update operations
const employeeSlice = createSlice({
  name: "employees",
  initialState,

  reducers: {
    // Add employee
    // here state represents the current employee slice state.
    addEmployee: (state, action) => {
      state.items.push(action.payload);
    },

    // Update employee
    updateEmployee: (state, action) => {
      const updatedEmployee = action.payload;

      const employeeIndex = state.items.findIndex(
        (employee) => employee.id === updatedEmployee.id
      );

      if (employeeIndex !== -1) {
        state.items[employeeIndex] = updatedEmployee;
      }
    },

    // Delete employee
    deleteEmployee: (state, action) => {
      state.items = state.items.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;
