import DashboardLayout from "../layouts/DashboardLayout";
import UploadCard from "../components/UploadCard";
import DocumentList from "../components/DocumentList";

function Documents() {
    return (
        <DashboardLayout>
            <div className="grid lg:grid-cols-2 gap-8">
                <UploadCard />
                <DocumentList />
            </div>
        </DashboardLayout>
    );
}

export default Documents;