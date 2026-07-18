import DashboardLayout from "../layouts/DashboardLayout";
import UploadCard from "../components/UploadCard";
import ChatBox from "../components/ChatBox";

function Chat() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                    <UploadCard />
                </div>
                <div className="col-span-8">
                    <ChatBox />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Chat;