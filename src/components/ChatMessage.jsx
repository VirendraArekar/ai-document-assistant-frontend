function ChatMessage({ message }) {
    const isUser = message.sender === "user";

    return (
        <div className={`flex mb-6 ${isUser ? "justify-end" : "justify-start"}`} >
            <div className={`max-w-[70%] rounded-xl px-5 py-3 ${isUser ? "bg-blue-600" : "bg-gray-800" }`} >
                <p>
                    {message.text}
                </p>
            </div>
        </div>
    )
}

export default ChatMessage;