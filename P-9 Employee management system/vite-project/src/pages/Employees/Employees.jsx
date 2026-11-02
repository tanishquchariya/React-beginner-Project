
import React from "react";
import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
} from "lucide-react";

const Employees = () => {
  const employees = [
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
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Employees
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your organization's employees.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Users className="text-blue-600" />
          <p className="mt-3 text-sm text-slate-500">Total Employees</p>
          <h2 className="mt-1 text-2xl font-bold">120</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Users className="text-green-600" />
          <p className="mt-3 text-sm text-slate-500">Active Employees</p>
          <h2 className="mt-1 text-2xl font-bold">108</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Users className="text-red-600" />
          <p className="mt-3 text-sm text-slate-500">Inactive Employees</p>
          <h2 className="mt-1 text-2xl font-bold">12</h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <h2 className="font-semibold text-slate-800">
            Employee Directory
          </h2>

          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-40 text-sm outline-none sm:w-56"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="p-4">Employee</th>
                <th className="p-4">Employee ID</th>
                <th className="p-4">Department</th>
                <th className="p-4">Position</th>
                <th className="p-4">Joining Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-t hover:bg-slate-50">
                  <td className="p-4">
                    <p className="font-medium text-slate-800">
                      {employee.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {employee.email}
                    </p>
                  </td>

                  <td className="p-4 text-slate-600">{employee.id}</td>
                  <td className="p-4 text-slate-600">
                    {employee.department}
                  </td>
                  <td className="p-4 text-slate-600">
                    {employee.position}
                  </td>
                  <td className="p-4 text-slate-600">
                    {employee.joiningDate}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <button title="View" className="text-slate-500 hover:text-blue-600">
                        <Eye size={17} />
                      </button>
                      <button title="Edit" className="text-slate-500 hover:text-blue-600">
                        <Pencil size={17} />
                      </button>
                      <button title="Delete" className="text-slate-500 hover:text-red-600">
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
