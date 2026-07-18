import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  uploadDocument,
  getDocuments,
  deleteDocument,
} from "../api/documentService";

export default function useDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    try {
      const data = await getDocuments();

      setDocuments(data);
    } catch {
      toast.error("Unable to load documents");
    }
  }

  async function upload(file) {
    try {
      await uploadDocument(file);

      toast.success("Document Uploaded");

      loadDocuments();
    } catch {
      toast.error("Upload Failed");
    }
  }

  async function remove(id) {
    try {
      await deleteDocument(id);

      toast.success("Document Deleted");

      loadDocuments();
    } catch {
      toast.error("Delete Failed");
    }
  }

  return {
    documents,

    upload,

    remove,
  };
}
