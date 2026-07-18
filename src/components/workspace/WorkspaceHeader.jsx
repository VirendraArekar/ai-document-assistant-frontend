import { BrainCircuit } from "lucide-react";

function WorkspaceHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">AI Workspace</h1>

        <p className="text-slate-400 mt-2">
          Upload documents and chat with AI.
        </p>
      </div>

      <div className="bg-blue-600 rounded-xl px-5 py-3 flex items-center gap-3">
        <BrainCircuit />
        AI Ready
      </div>
    </div>
  );
}

export default WorkspaceHeader;
