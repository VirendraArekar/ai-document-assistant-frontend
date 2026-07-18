import DashboardLayout from "../layouts/DashboardLayout";
import DocumentCard from "../components/DocumentCard";

function Documents() {
    const docs = [
        "Resume.pdf",
        "SpringBoot.pdf",
        "ReactGuide.pdf"
    ]

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">
                Uploaded Documents
            </h1>
            <div className="space-y-4">
                {
                    docs.map(doc =>
                        <DocumentCard
                            key={doc}
                            name={doc}
                        />
                    )
                }
            </div>
        </DashboardLayout>
    )
}

export default Documents;