import { FaFilePdf, FaTrash } from "react-icons/fa";

function DocumentItem({
    document,
    onDelete
}) {
    return (
        <div className="flex justify-between items-center bg-gray-900 rounded-xl p-4">
            <div className="flex items-center gap-4">
                <FaFilePdf
                    className="text-red-500"
                    size={30}
                />
                <div>
                    <h3>
                        {document.fileName}
                    </h3>
                    <p className="text-sm text-gray-400">
                        {(document.size / 1024).toFixed(2)} KB
                    </p>
                </div>
            </div>
            <button
                onClick={() => onDelete(document.id)}
                className="text-red-500"
            >
                <FaTrash />
            </button>
        </div>
    );
}

export default DocumentItem;