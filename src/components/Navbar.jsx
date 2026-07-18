import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
      <div className="relative">
        <Search size={18} className="absolute left-4 top-4 text-slate-400" />

        <input
          placeholder="Search documents..."
          className="w-96 rounded-xl bg-slate-800 pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell />

        <img
          src="https://i.pravatar.cc/100"
          className="h-11 w-11 rounded-full"
        />
      </div>
    </header>
  );
}

export default Navbar;
