import { Bell } from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    text: "Resume.pdf uploaded successfully",
  },

  {
    id: 2,
    text: "AI answered your last question",
  },

  {
    id: 3,
    text: "SpringBoot.pdf indexed",
  },
];

function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-xl hover:bg-slate-800"
      >
        <Bell />

        <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex justify-center items-center">
          {notifications.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-80 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl z-50">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="px-5 py-4 hover:bg-slate-800 border-b border-slate-800"
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;
