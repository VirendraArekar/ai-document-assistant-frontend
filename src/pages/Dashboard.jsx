import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import QuickActions from "../components/QuickActions";
import RecentDocuments from "../components/RecentDocuments";

function Dashboard() {
    return (
        <DashboardLayout>
            <div className="grid lg:grid-cols-3 gap-6">
                <StatCard
                    title="Documents"
                    value="15"
                />
                <StatCard
                    title="Questions"
                    value="247"
                />

                <StatCard
                    title="Responses"
                    value="247"
                />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">
                <QuickActions />
                <RecentDocuments />
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;