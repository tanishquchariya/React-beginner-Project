// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AdminLayout />}>
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/payroll" element={<Payroll />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
