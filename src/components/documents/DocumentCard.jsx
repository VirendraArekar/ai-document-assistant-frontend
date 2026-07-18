import { FileText, Eye, Trash2, Download, Star } from "lucide-react";

function DocumentCard({
  document,

  onDelete,

  onPreview,

  onDownload,
}) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
      <div className="flex justify-between">
        <FileText className="text-red-500" />

        <Star size={18} />
      </div>

      <h2 className="font-bold mt-5 truncate">{document.fileName}</h2>

      <p className="text-slate-400 mt-2">
        {(document.size / 1024 / 1024).toFixed(2)} MB
      </p>

      <p className="text-slate-500 text-sm mt-2">{document.uploadedDate}</p>

      <div className="grid grid-cols-3 gap-2 mt-6">
        <button
          onClick={() => onPreview(document)}
          className="bg-blue-600 rounded-lg py-2"
        >
          <Eye size={18} className="mx-auto" />
        </button>

        <button
          onClick={() => onDownload(document.id)}
          className="bg-green-600 rounded-lg py-2"
        >
          <Download size={18} className="mx-auto" />
        </button>

        <button
          onClick={() => onDelete(document.id)}
          className="bg-red-600 rounded-lg py-2"
        >
          <Trash2 size={18} className="mx-auto" />
        </button>
      </div>
    </div>
  );
}

export default DocumentCard;
