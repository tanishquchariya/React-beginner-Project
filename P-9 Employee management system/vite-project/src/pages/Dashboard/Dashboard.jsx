import {
  Users,
  UserCheck,
  Building2,
  CalendarCheck
} from "lucide-react";

import EmployeeTable from "./EmployeeTable";
import StatCard from "../../components/StatCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-slate-800">
        Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <StatCard title="Total Employees" value={120} icon={Users} />

        <StatCard title="Active Employees" value={108} icon={UserCheck} />

        <StatCard title="Departments" value={8} icon={Building2} />

        <StatCard title="Attendance Rate" value="96%" icon={CalendarCheck} />

      </div>

      {/* Recent Employees */}
      <EmployeeTable />

    </div>
  );
};

export default Dashboard;