import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import Loader from "./Loader";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const sendMessage = (text) => {
        const userMessage = {
            sender: "user",
            text: text
        };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "This response will come from Spring Boot AI backend."
                }
            ]);
            setLoading(false);
        }, 1200)
    }
    return (
        <div className="bg-gray-900 rounded-xl h-[700px] flex flex-col">
            <div className="flex-1 overflow-auto p-6">
                {
                    messages.map((msg, index) =>
                        <ChatMessage
                            key={index}
                            message={msg}
                        />
                    )
                }

                {
                    loading && <Loader />
                }

            </div>
            <div className="border-t border-gray-700 p-5">
                <ChatInput
                    onSend={sendMessage}
                />
            </div>
        </div>
    )
}

export default ChatBox;