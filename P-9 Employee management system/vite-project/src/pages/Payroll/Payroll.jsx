
import React from "react";
import {
  Wallet,
  IndianRupee,
  CheckCircle,
  Clock,
  Download,
  Search,
} from "lucide-react";

const Payroll = () => {
  const payrollRecords = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      salary: 65000,
      month: "October 2026",
      status: "Paid",
    },
    {
      id: 2,
      name: "Priya Verma",
      department: "HR",
      salary: 55000,
      month: "October 2026",
      status: "Paid",
    },
    {
      id: 3,
      name: "Aman Singh",
      department: "Finance",
      salary: 42000,
      month: "October 2026",
      status: "Pending",
    },
    {
      id: 4,
      name: "Neha Gupta",
      department: "Marketing",
      salary: 48000,
      month: "October 2026",
      status: "Paid",
    },
  ];

  const stats = [
    {
      title: "Total Payroll",
      value: "₹12,50,000",
      icon: Wallet,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Paid Amount",
      value: "₹10,20,000",
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Pending Amount",
      value: "₹2,30,000",
      icon: Clock,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  const formatSalary = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Payroll
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage employee salaries and payroll payments.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          <IndianRupee size={18} />
          Process Payroll
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
              Payroll Records
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Employee salary payment history
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-36 text-sm outline-none sm:w-48"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="p-4">Employee</th>
                <th className="p-4">Department</th>
                <th className="p-4">Salary</th>
                <th className="p-4">Pay Period</th>
                <th className="p-4">Payment Status</th>
                <th className="p-4">Receipt</th>
              </tr>
            </thead>

            <tbody>
              {payrollRecords.map((record) => (
                <tr key={record.id} className="border-t hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">
                    {record.name}
                  </td>
                  <td className="p-4 text-slate-600">
                    {record.department}
                  </td>
                  <td className="p-4 font-medium text-slate-700">
                    {formatSalary(record.salary)}
                  </td>
                  <td className="p-4 text-slate-600">
                    {record.month}
                  </td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        record.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      title="Download receipt"
                      className="text-slate-500 hover:text-blue-600"
                    >
                      <Download size={18} />
                    </button>
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

export default Payroll;
