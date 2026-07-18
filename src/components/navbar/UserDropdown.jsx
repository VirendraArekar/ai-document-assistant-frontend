import { useState } from "react";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >
        <img
          src="https://i.pravatar.cc/100"
          className="w-11 h-11 rounded-full"
        />

        <ChevronDown />
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-56 rounded-2xl bg-slate-900 border border-slate-700">
          <Link
            to="/profile"
            className="flex gap-3 px-5 py-4 hover:bg-slate-800"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            to="/settings"
            className="flex gap-3 px-5 py-4 hover:bg-slate-800"
          >
            <Settings size={18} />
            Settings
          </Link>

          <button className="flex gap-3 px-5 py-4 hover:bg-slate-800 w-full">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
