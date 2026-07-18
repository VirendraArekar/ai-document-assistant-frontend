import { X } from "lucide-react";

function PdfPreviewModal({
  open,

  onClose,

  document,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-slate-900 rounded-2xl w-5/6 h-5/6 relative">
        <button onClick={onClose} className="absolute right-5 top-5">
          <X />
        </button>

        <iframe
          title="preview"
          src={document.url}
          className="w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
}

export default PdfPreviewModal;
