import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-96">
            <Search
                size={18}
                className="absolute left-4 top-4 text-slate-400"
            />
            <input
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                placeholder="Search documents, chats..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default SearchBar;