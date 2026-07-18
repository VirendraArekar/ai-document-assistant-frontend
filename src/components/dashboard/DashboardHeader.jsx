import { Sparkles } from "lucide-react";

function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-slate-400 mt-2">
          Welcome back! Here's your AI workspace overview.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl">
        <Sparkles size={20} />
        <span>AI Ready</span>
      </div>
    </div>
  );
}

export default DashboardHeader;
