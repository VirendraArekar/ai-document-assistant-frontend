import { PlusCircle, Settings } from "lucide-react";

function ChatHeader() {
  return (
    <div className="flex justify-between items-center border-b border-slate-800 px-6 py-4">
      <h2 className="text-2xl font-bold">🤖 AI Assistant</h2>

      <div className="flex gap-3">
        <button className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 flex items-center gap-2">
          <PlusCircle size={18} />
          New Chat
        </button>

        <button className="bg-slate-800 p-2 rounded-xl">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
