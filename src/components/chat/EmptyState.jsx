import { Bot } from "lucide-react";

function EmptyState() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Bot size={80} className="text-blue-500" />

      <h2 className="text-3xl font-bold mt-6">AI Assistant</h2>

      <p className="text-slate-400 mt-4">
        Ask anything about your uploaded documents.
      </p>
    </div>
  );
}

export default EmptyState;
