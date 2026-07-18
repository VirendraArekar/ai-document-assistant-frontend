import {
    FaHome,
    FaComments,
    FaFileAlt,
    FaUserCircle,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menu = [
    {
        title: "Dashboard",
        icon: <FaHome />,
        path: "/dashboard"
    },
    {
        title: "AI Chat",
        icon: <FaComments />,
        path: "/chat"
    },
    {
        title: "Documents",
        icon: <FaFileAlt />,
        path: "/documents"
    },
    {
        title: "Profile",
        icon: <FaUserCircle />,
        path: "/profile"
    }
];

function Sidebar() {

    return (
        <div className="w-64 h-screen bg-gray-950 border-r border-gray-800 flex flex-col">
            <div className="text-2xl font-bold p-6 text-blue-500">
                AI Assistant
            </div>

            <div className="flex-1">
                {
                    menu.map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-4 mx-3 rounded-lg mb-2 transition
                                ${isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-gray-800"}`
                            }
                        >
                            {item.icon}
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <button className="m-4 bg-red-600 rounded-lg p-3 flex justify-center items-center gap-3">
                <FaSignOutAlt />
                Logout
            </button>
        </div>
    )

}

export default Sidebar;