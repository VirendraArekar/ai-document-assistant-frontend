import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "AI Chat",
    path: "/chat",
    icon: MessageSquare,
  },

  {
    name: "Documents",
    path: "/documents",
    icon: FileText,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-8">
        <h1 className="text-3xl font-bold">🤖 AI Docs</h1>

        <p className="text-slate-400 mt-2">Spring Boot + LangChain</p>
      </div>

      <nav className="flex-1 px-4">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-5 py-4 mb-2 transition ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4">
        <button className="flex w-full items-center gap-3 rounded-xl bg-red-600 px-5 py-4 hover:bg-red-700">
          <LogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
