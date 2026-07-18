import {
    FaBell,
    FaSearch
} from "react-icons/fa";

function Navbar() {
    return (
        <div className="bg-gray-950 h-16 px-8 flex justify-between items-center border-b border-gray-800">
            <div className="flex items-center gap-5">
                <div className="relative">
                    <input
                        placeholder="Search..."
                        className="bg-gray-800 rounded-lg pl-10 pr-5 py-2"
                    />
                    <FaSearch
                        className="absolute left-3 top-3 text-gray-400"
                    />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <FaBell size={18} />
                <img
                    src="https://i.pravatar.cc/45"
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default Navbar;