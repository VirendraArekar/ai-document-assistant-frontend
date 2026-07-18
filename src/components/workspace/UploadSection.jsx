import { UploadCloud } from "lucide-react";

function UploadSection() {
  return (
    <div className="border-2 border-dashed border-blue-500 rounded-3xl p-16 bg-slate-900 text-center">
      <UploadCloud size={70} className="mx-auto text-blue-500" />

      <h2 className="text-3xl font-bold mt-6">Drop your files here</h2>

      <p className="text-slate-400 mt-4">PDF • DOCX • TXT</p>

      <button className="mt-8 bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700">
        Browse Files
      </button>
    </div>
  );
}

export default UploadSection;
