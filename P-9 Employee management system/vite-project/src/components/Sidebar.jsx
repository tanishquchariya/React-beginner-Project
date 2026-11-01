// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

// This is called data-driven rendering
// The idea is simple: store navigation information in an array, and let React generate the UI using .map().
const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Attendance", path: "/attendance" },
  { name: "Departments", path: "/departments" },
  { name: "Employees", path: "/employees" },
  { name: "Payroll", path: "/payroll" },
];

const Sidebar = () => {
  const getNavClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-700 hover:text-white"
    }`;
  return (
    <aside className="w-64 min-h-screen bg-slate-900 p-5">
      <h2 className="text-2xl font-bold text-white">EMS</h2>
      <nav className="mt-8 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={getNavClass}>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
