import DashboardLayout from "../layouts/DashboardLayout";
import UploadZone from "../components/documents/UploadZone";
import DocumentGrid from "../components/documents/DocumentGrid";
import useDocuments from "../hooks/useDocuments";

function Documents() {
  const {
    documents,

    upload,

    remove,
  } = useDocuments();

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Documents</h1>

      <UploadZone onUpload={upload} />

      <div className="mt-10">
        <DocumentGrid documents={documents} onDelete={remove} />
      </div>
    </DashboardLayout>
  );
}

export default Documents;
