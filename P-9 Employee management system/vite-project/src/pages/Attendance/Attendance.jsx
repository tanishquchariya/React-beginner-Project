
import React from "react";
import {
  CalendarCheck,
  Clock,
  UserCheck,
  UserX,
  Search,
  Download,
} from "lucide-react";

const Attendance = () => {
  const attendanceRecords = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Verma",
      department: "HR",
      checkIn: "09:15 AM",
      checkOut: "06:10 PM",
      status: "Late",
    },
    {
      id: 3,
      name: "Aman Singh",
      department: "Finance",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
    },
    {
      id: 4,
      name: "Neha Gupta",
      department: "Marketing",
      checkIn: "08:55 AM",
      checkOut: "05:50 PM",
      status: "Present",
    },
  ];

  const stats = [
    {
      title: "Present Today",
      value: "96",
      icon: UserCheck,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Absent Today",
      value: "12",
      icon: UserX,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Late Arrivals",
      value: "8",
      icon: Clock,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      title: "Attendance Rate",
      value: "92%",
      icon: CalendarCheck,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Attendance
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track and manage employee attendance.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className={`w-fit rounded-lg p-3 ${stat.bg}`}>
                <Icon size={23} className={stat.color} />
              </div>

              <p className="mt-4 text-sm text-slate-500">
                {stat.title}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-800">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <h2 className="font-semibold text-slate-800">
              Daily Attendance
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Employee attendance records
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="date"
              className="rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="hidden items-center gap-2 rounded-lg border px-3 py-2 sm:flex">
              <Search size={17} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-28 text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="p-4">Employee</th>
                <th className="p-4">Department</th>
                <th className="p-4">Check In</th>
                <th className="p-4">Check Out</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendanceRecords.map((record) => (
                <tr key={record.id} className="border-t hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">
                    {record.name}
                  </td>
                  <td className="p-4 text-slate-600">
                    {record.department}
                  </td>
                  <td className="p-4 text-slate-600">
                    {record.checkIn}
                  </td>
                  <td className="p-4 text-slate-600">
                    {record.checkOut}
                  </td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        record.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : record.status === "Late"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {record.status}
                    </span>
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

export default Attendance;
