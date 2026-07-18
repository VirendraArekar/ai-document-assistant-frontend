import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Bot, User } from "lucide-react";

import CodeBlock from "./CodeBlock";
import CopyButton from "./CopyButton";

function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex gap-4 mb-8 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div className="bg-blue-600 p-3 rounded-full h-fit">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-4xl rounded-2xl p-5 ${
          isUser ? "bg-blue-600" : "bg-slate-800"
        }`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({
              inline,

              className,

              children,

              ...props
            }) {
              const match = /language-(\w+)/.exec(className || "");

              return !inline && match ? (
                <CodeBlock
                  language={match[1]}
                  value={String(children).replace(/\n$/, "")}
                />
              ) : (
                <code className="bg-slate-900 px-1 rounded" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message.text}
        </ReactMarkdown>

        {!isUser && (
          <div className="mt-4">
            <CopyButton text={message.text} />
          </div>
        )}
      </div>

      {isUser && (
        <div className="bg-green-600 p-3 rounded-full h-fit">
          <User size={18} />
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
