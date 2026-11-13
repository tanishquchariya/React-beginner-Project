import {
  Users,
  UserCheck,
  Building2,
  CalendarCheck
} from "lucide-react";

import EmployeeTable from "./EmployeeTable";
import StatCard from "../../components/StatCard";
import { useSelector } from "react-redux"


const Dashboard = () => {
  const employees = useSelector((state)=>state.employees.items);
  console.log("Dashboard employee : ", employees);

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((employee)=> employee.status === "Active").length;
  const inactiveEmployees = employees.filter((employee) => employee.status === "Inactive").length;
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-slate-800">
        Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <StatCard title="Total Employees" value={totalEmployees} icon={Users} />

        <StatCard title="Active Employees" value={activeEmployees} icon={UserCheck} />

        <StatCard title="Departments" value={inactiveEmployees} icon={Building2} />

        <StatCard title="Attendance Rate" value="96%" icon={CalendarCheck} />

      </div>

      {/* Recent Employees */}
      <EmployeeTable />

    </div>
  );
};
export default Dashboard;