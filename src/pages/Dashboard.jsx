import DashboardLayout from "../layouts/DashboardLayout";
import { FileText, MessageSquare, Brain, Database } from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import { useEffect, useState } from "react";
import { getDashboard } from "../api/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState({
    totalDocuments: 0,

    totalChats: 0,

    totalQuestions: 0,

    storageUsed: "0 MB",
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();

      setStats(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Documents"
          value={stats.totalDocuments}
          color="bg-blue-600"
          icon={<FileText />}
        />

        <StatCard
          title="Chats"
          value={stats.totalChats}
          color="bg-green-600"
          icon={<MessageSquare />}
        />

        <StatCard
          title="Questions"
          value={stats.totalQuestions}
          color="bg-purple-600"
          icon={<Brain />}
        />

        <StatCard
          title="Storage"
          value={stats.storageUsed}
          color="bg-orange-600"
          icon={<Database />}
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
