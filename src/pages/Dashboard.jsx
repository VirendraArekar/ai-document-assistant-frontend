import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function Dashboard() {
    return (
        <DashboardLayout>
            <div className="grid md:grid-cols-3 gap-6">
                <StatCard
                    title="Uploaded Documents"
                    value="12"
                />
                <StatCard
                    title="Questions Asked"
                    value="185"
                />
                <StatCard
                    title="AI Responses"
                    value="185"
                />
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mt-8">
                <h2 className="text-2xl font-bold">
                    Welcome 👋
                </h2>
                <p className="mt-3 text-gray-400">
                    Upload your PDF and start asking questions.
                </p>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;