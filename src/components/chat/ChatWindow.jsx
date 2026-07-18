import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (messages.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;
