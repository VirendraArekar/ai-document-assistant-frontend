import DashboardLayout from "../layouts/DashboardLayout";

import ProfileCard from "../components/settings/ProfileCard";
import ThemeSettings from "../components/settings/ThemeSettings";
import AISettings from "../components/settings/AISettings";
import AccountSettings from "../components/settings/AccountSettings";
import DangerZone from "../components/settings/DangerZone";

function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Settings</h1>

        <div className="space-y-8">
          <ProfileCard />

          <ThemeSettings />

          <AISettings />

          <AccountSettings />

          <DangerZone />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
