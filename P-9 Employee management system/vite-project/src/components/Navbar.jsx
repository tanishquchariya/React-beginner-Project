import { Search, Bell, LogOut, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm border-b">

      {/* Application Title */}
      <h1 className="text-xl font-bold text-slate-800">
        Employee Management System
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search employees..."
            className="w-48 outline-none text-sm"
          />
        </div>

        {/* Notification */}
        <button type="button"
        aria-label="Notifications">
          <Bell size={21} className="text-gray-600" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <UserRound size={22} className="text-gray-600" />

          <span className="text-sm font-medium text-slate-700">
            Admin
          </span>
        </div>

        {/* Logout */}
        <button type="button"
        aria-label="Logout">
          <LogOut size={21} className="text-gray-600" />
        </button>

      </div>

    </header>
  );
};

export default Navbar;