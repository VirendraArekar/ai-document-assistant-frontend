import DashboardLayout from "../layouts/DashboardLayout";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import TypingIndicator from "../components/chat/TypingIndicator";
import useChat from "../hooks/useChat";

function Chat() {
  const { messages, loading, send } = useChat();

  return (
    <DashboardLayout>
      <div className="flex h-[85vh] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
        <ChatSidebar />

        <div className="flex flex-1 flex-col">
          <ChatHeader />

          <ChatWindow messages={messages} />

          {loading && (
            <div className="px-6">
              <TypingIndicator />
            </div>
          )}

          <div className="border-t border-slate-800 p-6">
            <ChatInput onSend={send} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chat;
