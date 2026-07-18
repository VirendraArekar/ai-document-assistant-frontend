import { FaFilePdf } from "react-icons/fa";

function DocumentCard({ name }) {
    return (
        <div className="bg-gray-900 rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <FaFilePdf
                    size={30}
                    className="text-red-500"
                />
                {name}
            </div>
            <button
                className="bg-red-600 px-3 py-2 rounded"
            >
                Delete
            </button>
        </div>
    )
}

export default DocumentCard;