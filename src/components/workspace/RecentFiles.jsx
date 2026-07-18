import { FileText, CheckCircle, LoaderCircle } from "lucide-react";

const files = [
  {
    name: "Resume.pdf",
    status: "Ready",
  },

  {
    name: "SpringBoot.pdf",
    status: "Processing",
  },

  {
    name: "Docker.pdf",
    status: "Ready",
  },
];

function RecentFiles() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">Recent Files</h2>

      {files.map((file) => (
        <div
          key={file.name}
          className="flex justify-between py-4 border-b border-slate-800"
        >
          <div className="flex gap-4">
            <FileText />

            {file.name}
          </div>

          {file.status === "Ready" ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <LoaderCircle className="animate-spin text-yellow-400" />
          )}
        </div>
      ))}
    </div>
  );
}

export default RecentFiles;
