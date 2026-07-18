import { useState } from "react";
import { SendHorizonal } from "lucide-react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-4">
      <textarea
        rows={2}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            handleSend();
          }
        }}
        placeholder="Ask your AI Assistant..."
        className="flex-1 resize-none rounded-2xl bg-slate-800 border border-slate-700 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 rounded-2xl px-6 hover:bg-blue-700 transition"
      >
        <SendHorizonal />
      </button>
    </div>
  );
}

export default ChatInput;
