import { FaBell } from "react-icons/fa";

function Navbar() {
    return (
        <div className="h-16 border-b border-gray-800 flex justify-between items-center px-8">
            <div>
                <h2 className="text-2xl font-bold">
                    Dashboard
                </h2>
            </div>
            <div className="flex items-center gap-5">
                <FaBell size={20} />
                <img
                    src="https://i.pravatar.cc/40"
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default Navbar;