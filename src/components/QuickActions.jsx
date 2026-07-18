import {
    FaUpload,
    FaComments,
    FaFileAlt,
    FaRobot
} from "react-icons/fa";

function QuickActions() {
    const actions = [
        {
            title: "Upload",
            icon: <FaUpload />
        },

        {
            title: "Chat",
            icon: <FaComments />
        },

        {
            title: "Documents",
            icon: <FaFileAlt />
        },

        {
            title: "AI Search",
            icon: <FaRobot />
        }

    ];

    return (
        <div className="grid grid-cols-2 gap-5">
            {
                actions.map(action =>
                    <div
                        key={action.title}
                        className="bg-gray-900 rounded-xl p-6 hover:bg-blue-700 cursor-pointer transition"
                    >
                        <div className="text-3xl mb-4">
                            {action.icon}

                        </div>
                        <h2 className="text-xl">
                            {action.title}
                        </h2>
                    </div>
                )
            }
        </div>
    )
}

export default QuickActions;