import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-scree bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;