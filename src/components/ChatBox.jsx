import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EmptyChat from "./EmptyChat";
import TypingLoader from "./TypingLoader";
import useChat from "../hooks/useChat";

function ChatBox() {
    const {
        messages,
        loading,
        sendMessage
    } = useChat();

    return (
        <div className="bg-gray-900 rounded-xl h-[700px] flex flex-col">
            <div className="flex-1 overflow-auto p-6">
                {
                    messages.length === 0
                        ? <EmptyChat />
                        :
                        messages.map((msg, index) => (
                            <ChatMessage
                                key={index}
                                message={msg}
                            />
                        ))
                }

                {
                    loading &&
                    <TypingLoader />
                }
            </div>
            <div className="border-t border-gray-700 p-5">
                <ChatInput
                    onSend={sendMessage}
                />
            </div>
        </div>
    );
}

export default ChatBox;