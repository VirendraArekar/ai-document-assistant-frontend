import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import UsageChart from "../components/dashboard/UsageChart";
import RecentActivity from "../components/dashboard/RecentActivity";

import { FileText, MessageSquare, Brain, Users } from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Documents"
          value="24"
          icon={FileText}
          color="bg-blue-600"
        />

        <StatCard
          title="Questions"
          value="512"
          icon={MessageSquare}
          color="bg-green-600"
        />

        <StatCard
          title="AI Tokens"
          value="52K"
          icon={Brain}
          color="bg-purple-600"
        />

        <StatCard title="Users" value="5" icon={Users} color="bg-orange-600" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UsageChart />
        </div>

        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
