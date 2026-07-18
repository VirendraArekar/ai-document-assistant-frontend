import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatMessage({ message }) {
    const isUser = message.sender === "user";
    return (
        <div
            className={`mb-6 flex ${isUser
                    ? "justify-end"
                    : "justify-start"
                }`}
        >
            <div
                className={`rounded-xl p-5 max-w-[80%]
                ${isUser
                        ? "bg-blue-600"
                        : "bg-gray-900"
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
                                <SyntaxHighlighter
                                    style={atomDark}
                                    language={match[1]}
                                    PreTag="div"
                                >
                                    {String(children)}
                                </SyntaxHighlighter>
                            ) : (
                                <code>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {message.text}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default ChatMessage;