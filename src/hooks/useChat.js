import { useState } from "react";
import toast from "react-hot-toast";

import { askQuestion } from "../api/chatService";

export default function useChat() {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  async function send(question) {
    const userMessage = {
      sender: "user",

      text: question,

      time: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);

      const result = await askQuestion(question);

      const aiMessage = {
        sender: "ai",

        text: "",

        time: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      let current = "";

      for (const ch of result.answer) {
        current += ch;

        await new Promise((r) => setTimeout(r, 12));

        setMessages((prev) => {
          const copy = [...prev];

          copy[copy.length - 1] = {
            ...copy[copy.length - 1],

            text: current,
          };

          return copy;
        });
      }
    } catch {
      toast.error("AI service unavailable");
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,

    loading,

    send,
  };
}
