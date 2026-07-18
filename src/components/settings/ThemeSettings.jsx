import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ThemeSettings() {
  const [dark, setDark] = useState(true);

  return (
    <div className="bg-slate-900 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Theme</h2>

      <button
        onClick={() => setDark(!dark)}
        className="bg-blue-600 px-6 py-3 rounded-xl flex gap-3"
      >
        {dark ? <Moon /> : <Sun />}

        {dark ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default ThemeSettings;
