import { useState } from "react";
import { askAI } from "../api/chatService";
import toast from "react-hot-toast";

export default function useChat() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const sendMessage = async (text) => {
        if (!text.trim()) return;
        const userMessage = {
            sender: "user",
            text
        };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        try {
            const response = await askAI(text);
            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: response.answer
                }
            ]);
        } catch (e) {
            toast.error("AI Server Unavailable");
        } finally {
            setLoading(false);
        }
    };

    return {
        messages,
        loading,
        sendMessage
    };
}