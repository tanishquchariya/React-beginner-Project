// AdminLayout.jsx will be responsible for combining Sidebar, Navbar, and page content.

import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({children}) => {
  return (
    <div>
      <aside>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/employees">Employees</a>
        </nav>
      </aside>
      <header>
         Employee Management System
      </header>
      <main>
        <Outlet/>
      </main>
      <Sidebar />
      <Navbar />
      <main></main>
    </div>
  );
};

export default AdminLayout;
