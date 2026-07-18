import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import toast from "react-hot-toast";

function UploadZone({ onUpload }) {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,

    maxSize: 10 * 1024 * 1024,

    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },

    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        toast.error("Only PDF, DOCX or TXT files up to 10MB are allowed.");

        return;
      }

      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-blue-500 rounded-2xl p-12 bg-slate-900 hover:bg-slate-800 transition cursor-pointer text-center"
    >
      <input {...getInputProps()} />

      <UploadCloud size={60} className="mx-auto text-blue-500" />

      <h2 className="text-2xl font-bold mt-5">Drag & Drop Documents</h2>

      <p className="text-slate-400 mt-3">PDF, DOCX, TXT (Maximum 10 MB)</p>

      <button
        type="button"
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Browse Files
      </button>
    </div>
  );
}

export default UploadZone;
