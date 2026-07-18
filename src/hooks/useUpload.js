import { useState } from "react";
import toast from "react-hot-toast";
import { uploadDocument } from "../api/documentService";

export default function useUpload() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const upload = async (file) => {
    try {
      setLoading(true);
      await uploadDocument(file, (event) => {
        const percent = Math.round((event.loaded * 100) / event.total);
        setProgress(percent);
      });
      toast.success("Document uploaded successfully");
    } catch (e) {
      toast.error("Upload failed");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return {
    upload,
    progress,
    loading,
  };
}
