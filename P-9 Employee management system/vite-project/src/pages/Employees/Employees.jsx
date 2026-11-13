import React, { useState, useMemo } from "react";
import { Plus, Search, Eye, Pencil, Trash2, Users } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../features/employees/employeeSlice";

const Employees = () => {
  // for add new Employees
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("Engineering");
  const [position, setPosition] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [status, setStatus] = useState("Active");
  const [searchText, setSearchText] = useState("");
  const [errors, setErrors] = useState({});
  const [edit, setEdit] = useState(null);

  // const [employees, setEmployees] = useState([
  //   {
  //     id: "EMP001",
  //     name: "Rahul Sharma",
  //     email: "rahul@gmail.com",
  //     department: "Engineering",
  //     position: "Frontend Developer",
  //     joiningDate: "12 Jan 2025",
  //     status: "Active",
  //   },
  //   {
  //     id: "EMP002",
  //     name: "Priya Verma",
  //     email: "priya@gmail.com",
  //     department: "HR",
  //     position: "HR Manager",
  //     joiningDate: "05 Mar 2024",
  //     status: "Active",
  //   },
  //   {
  //     id: "EMP003",
  //     name: "Aman Singh",
  //     email: "aman@gmail.com",
  //     department: "Finance",
  //     position: "Accountant",
  //     joiningDate: "18 Jun 2025",
  //     status: "Inactive",
  //   },
  //   {
  //     id: "EMP004",
  //     name: "Neha Gupta",
  //     email: "neha@gmail.com",
  //     department: "Marketing",
  //     position: "Marketing Executive",
  //     joiningDate: "20 Aug 2024",
  //     status: "Active",
  //   },
  // ]);



  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.items);
  console.log("Employees from Redux:", employees);

  const filteredEmployees = useMemo(
    () =>
      employees.filter((employee) => {
        const search = searchText.toLowerCase();

        return (
          employee.name.toLowerCase().includes(search) ||
          employee.email.toLowerCase().includes(search) ||
          employee.department.toLowerCase().includes(search) ||
          employee.position.toLowerCase().includes(search)
        );
      }),
    [employees, searchText],
  );
  console.log(filteredEmployees, employees, "filter list");

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Employee name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!position.trim()) {
      newErrors.position = "Position is required";
    }

    if (!joiningDate) {
      newErrors.joiningDate = "Joining date is required";
    }

    return newErrors;
  };

  // const handleSubmit = () => {
  //   const validationErrors = validateForm();

  //   setErrors(validationErrors);

  //   // returns an array of object property names.
  //   if (Object.keys(validationErrors).length > 0) {
  //     return;
  //   }

  //   const newEmployee = {
  //     id: edit || `EMP${String(employees.length + 1).padStart(3, "0")}`,
  //     name: name.trim(),
  //     email: email.trim(),
  //     department,
  //     position: position.trim(),
  //     joiningDate,
  //     status,
  //   };
  //   console.log(edit);

  //   if (edit) {
  //     // Update existing employee
  //     const updatedEmployees = employees.map((employee) => {
  //       if (employee.id === edit) {
  //         return newEmployee;
  //       }
  //       return employee;
  //     });
  //     setEmployees(updatedEmployees);
  //     console.log(updatedEmployees);
  //   } else {
  //     // Addd New Employee
  //     setEmployees([...employees, newEmployee]);
  //   }

  //   // setEmployees((previousEmployees) => [...previousEmployees, newEmployee]);

  //   // Reset form fields
  //   setName("");
  //   setEmail("");
  //   setDepartment("Engineering");
  //   setPosition("");
  //   setJoiningDate("");
  //   setStatus("Active");
  //   setErrors({});

  //   // Close modal
  //   setShowForm(false);
  // };

  const handleSubmit = () => {
    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Generate the next employee ID
    const nextEmployeeNumber =
      employees.reduce((maxNumber, employee) => {
        const currentNumber = Number(employee.id.replace("EMP", ""));
        return Math.max(maxNumber, currentNumber);
      }, 0) + 1;

    // Create employee object
    const newEmployee = {
      id: edit || `EMP${String(nextEmployeeNumber).padStart(3, "0")}`,
      name: name.trim(),
      email: email.trim(),
      department,
      position: position.trim(),
      joiningDate,
      status,
    };

    console.log("Employee submitted:", newEmployee);

    if (edit) {
      // Update existing employee
      dispatch(updateEmployee(newEmployee));
    } else {
      // Add new employee
      dispatch(addEmployee(newEmployee));
    }

    // Reset form
    resetForm();

    setShowForm(false);
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setDepartment("Engineering");
    setPosition("");
    setJoiningDate("");
    setStatus("Active");
    setErrors({});
    setEdit(null);
  };

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive",
  ).length;

  // Delete Employee
  // const handleDelete = (id) => {
  //   const updatedEmployees = employees.filter((employee) => {
  //     return employee.id !== id;
  //   });
  //   setEmployees(updatedEmployees);
  // };
  // Delete Employee
 

  // Delete Employee by Redux method
  const handleDelete = (id) => {
    
    dispatch(deleteEmployee(id));
  };

  // Edit Employee
  const handleEdit = (employee) => {
    setEdit(employee.id);
    console.log(employee);

    setName(employee.name);
    setEmail(employee.email);
    setDepartment(employee.department);
    setPosition(employee.position);
    setJoiningDate(employee.joiningDate);
    setStatus(employee.status);

    setShowForm(true);
  };

  // const reduxEmployees = useSelector((state) => state.employees.items);
  // console.log("Employees from Redux:", reduxEmployees);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Employees</h1>
          <p className="mt-1 text-sm text-slate-500">Manage your employees.</p>
        </div>

        {/* Add Employee button */}
        <button
          onClick={() => {
            resetForm();
            setEdit();
            setShowForm(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      {/* Conditional form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                Add New Employee
              </h2>

              <button
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>

            <div className="space-y-4">
              {/* Employee Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Employee Name
                </label>

                <input
                  type="text"
                  placeholder="Enter employee name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Department
                </label>

                <select
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Position
                </label>

                <input
                  type="text"
                  value={position}
                  onChange={(event) => {
                    setPosition(event.target.value);
                    setErrors((prev) => ({ ...prev, position: "" }));
                  }}
                  placeholder="Enter position"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-500">{errors.position}</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Joining Date
                </label>

                <input
                  type="date"
                  value={joiningDate}
                  onChange={(event) => {
                    setJoiningDate(event.target.value);
                    setErrors((prev) => ({ ...prev, joiningDate: "" }));
                  }}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                />
                {errors.joiningDate && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.joiningDate}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Status</label>

                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-lg border px-4 py-2 text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Save Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Users className="text-blue-600" />
          <p className="mt-3 text-sm text-slate-500">Total Employees</p>
          <h2 className="mt-1 text-2xl font-bold">{totalEmployees}</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Users className="text-green-600" />
          <p className="mt-3 text-sm text-slate-500">Active Employees</p>
          <h2 className="mt-1 text-2xl font-bold">{activeEmployees}</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Users className="text-red-600" />
          <p className="mt-3 text-sm text-slate-500">Inactive Employees</p>
          <h2 className="mt-1 text-2xl font-bold">{inactiveEmployees}</h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <h2 className="font-semibold text-slate-800">Employee Directory</h2>

          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
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
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="border-t hover:bg-slate-100">
                  <td className="p-4">
                    <p className="font-medium text-slate-800">
                      {employee.name}
                    </p>
                    <p className="text-xs text-slate-500">{employee.email}</p>
                  </td>

                  <td className="p-4 text-slate-600">{employee.id}</td>
                  <td className="p-4 text-slate-600">{employee.department}</td>
                  <td className="p-4 text-slate-600">{employee.position}</td>
                  <td className="p-4 text-slate-600">{employee.joiningDate}</td>

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
                      <button
                        title="View"
                        className="text-slate-500 hover:text-blue-600"
                      >
                        <Eye size={17} />
                      </button>
                      <button
                        title="Edit"
                        className="text-slate-500 hover:text-blue-600"
                        onClick={() => {
                          handleEdit(employee);
                        }}
                      >
                        <Pencil size={17} />
                      </button>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(employee.id)}
                        className="text-slate-500 hover:text-red-600"
                      >
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
