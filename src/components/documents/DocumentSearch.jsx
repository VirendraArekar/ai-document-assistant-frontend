import { Search } from "lucide-react";

function DocumentSearch({ value, onChange }) {
  return (
    <div className="relative">
      <Search size={18} className="absolute left-4 top-4 text-slate-400" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search documents..."
        className="w-full rounded-xl bg-slate-900 border border-slate-700 pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default DocumentSearch;
