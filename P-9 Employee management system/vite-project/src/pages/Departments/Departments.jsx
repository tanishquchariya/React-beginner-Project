
import React from "react";
import {
  Plus,
  Building2,
  Users,
  UserRound,
  MoreVertical,
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: "Engineering",
      manager: "Rahul Sharma",
      employees: 35,
      description: "Software development and technical operations.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "Human Resources",
      manager: "Priya Verma",
      employees: 12,
      description: "Recruitment and employee management.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      name: "Finance",
      manager: "Aman Singh",
      employees: 18,
      description: "Financial planning and accounting.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      name: "Marketing",
      manager: "Neha Gupta",
      employees: 22,
      description: "Brand development and marketing strategy.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      name: "Sales",
      manager: "Vikram Patel",
      employees: 20,
      description: "Sales operations and customer relationships.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 6,
      name: "Operations",
      manager: "Karan Mehta",
      employees: 13,
      description: "Daily business operations and processes.",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Departments
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage departments and their teams.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={18} />
          Add Department
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.id}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className={`rounded-lg p-3 ${department.color}`}>
                <Building2 size={24} />
              </div>

              <button className="text-slate-400 hover:text-slate-700">
                <MoreVertical size={20} />
              </button>
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-800">
              {department.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {department.description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users size={17} />
                {department.employees} Employees
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <UserRound size={17} />
                {department.manager}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
