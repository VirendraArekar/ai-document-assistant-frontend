import { FaFilePdf } from "react-icons/fa";

const documents = [
    "Resume.pdf",
    "SpringBoot.pdf",
    "React Guide.pdf",
    "Microservices.pdf"
];

function RecentDocuments() {
    return (
        <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-5">
                Recent Documents
            </h2>
            <div className="space-y-4">
                {
                    documents.map((doc, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-800 rounded-lg p-3"
                        >
                            <div className="flex items-center gap-3">
                                <FaFilePdf className="text-red-500" />
                                {doc}
                            </div>
                            <button
                                className="text-blue-400 hover:text-blue-300"
                            >
                                View
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentDocuments;