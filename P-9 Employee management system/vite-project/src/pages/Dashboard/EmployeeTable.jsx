import React, { useState } from "react";

const EmployeeTable = () => {
  const [searchText, setSearchText] = useState("");
  const employees = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      position: "Frontend Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Verma",
      department: "HR",
      position: "HR Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Singh",
      department: "Finance",
      position: "Accountant",
      status: "Inactive",
    },
  ];
const filteredEmployees = employees.filter((employee) =>
  employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
  employee.department.toLowerCase().includes(searchText.toLowerCase()) ||
  employee.position.toLowerCase().includes(searchText.toLowerCase())
);
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Recent Employees</h2>

        <input
          type="text"
          placeholder="Search employees..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          className="border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-slate-500">
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Position</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-5 text-slate-500">
                  No employees found
                </td>
              </tr>
            ) : (
              filteredEmployees.map((employee) => (
                <tr key={employee.id} className="border-b hover:bg-slate-50">
                  <td className="p-3 font-medium">{employee.name}</td>
                  <td className="p-3">{employee.department}</td>
                  <td className="p-3">{employee.position}</td>
                  <td className="p-3">{/* Your existing status span */}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
