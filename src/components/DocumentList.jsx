import { useEffect, useState } from "react";
import {
    getDocuments,
    deleteDocument
} from "../api/documentService";
import DocumentItem from "./DocumentItem";
import toast from "react-hot-toast";

function DocumentList() {
    const [documents, setDocuments] = useState([]);
    const loadDocuments = async () => {
        const response = await getDocuments();
        setDocuments(response.data);
    };

    useEffect(() => {
        loadDocuments();
    }, []);

    const remove = async (id) => {
        await deleteDocument(id);
        toast.success("Deleted");
        loadDocuments();
    };

    return (
        <div className="space-y-4">
            {
                documents.map((doc) => (
                    <DocumentItem
                        key={doc.id}
                        document={doc}
                        onDelete={remove}
                    />
                ))
            }
        </div>
    );
}

export default DocumentList;