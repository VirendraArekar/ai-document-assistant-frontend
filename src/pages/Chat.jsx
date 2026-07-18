import DashboardLayout from "../layouts/DashboardLayout";

function Chat() {
    return (
        <DashboardLayout>
            <div className="bg-gray-900 rounded-xl h-[700px] flex flex-col">
                <div className="flex-1 p-6 overflow-auto">
                </div>
                <div className="border-t border-gray-700 p-5">
                    <input
                        className="w-full bg-gray-800 rounded-lg p-4"
                        placeholder="Ask anything..."
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Chat;