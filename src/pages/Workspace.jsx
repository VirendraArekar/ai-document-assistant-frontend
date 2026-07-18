import DashboardLayout from "../layouts/DashboardLayout";
import WorkspaceHeader from "../components/workspace/WorkspaceHeader";
import UploadSection from "../components/workspace/UploadSection";
import RecentFiles from "../components/workspace/RecentFiles";
import SummaryCard from "../components/workspace/SummaryCard";
import SuggestedQuestions from "../components/workspace/SuggestedQuestions";

function Workspace() {
  return (
    <DashboardLayout>
      <WorkspaceHeader />

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <UploadSection />

          <div className="mt-6">
            <RecentFiles />
          </div>
        </div>

        <div className="space-y-6">
          <SummaryCard />

          <SuggestedQuestions />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Workspace;
