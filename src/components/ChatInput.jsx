import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend }) {
    const [message, setMessage] = useState("");
    const submit = () => {
        if (!message.trim()) return;
        onSend(message);
        setMessage("");
    }

    return (
        <div className="flex gap-3">
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-4 rounded-lg bg-gray-800"
                placeholder="Ask anything about your document..."
            />

            <button
                onClick={submit}
                className="bg-blue-600 px-6 rounded-lg"
            >
                <FaPaperPlane />
            </button>
        </div>
    )
}

export default ChatInput;