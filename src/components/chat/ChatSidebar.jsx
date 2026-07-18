import { MessageSquare } from "lucide-react";

function ChatSidebar() {
  const chats = [
    "Spring Boot",

    "React Interview",

    "Docker Questions",

    "Kubernetes",
  ];

  return (
    <div className="w-72 bg-slate-900 border-r border-slate-800">
      <h2 className="text-xl font-bold p-6">History</h2>

      {chats.map((chat) => (
        <div
          key={chat}
          className="px-6 py-4 hover:bg-slate-800 cursor-pointer flex gap-3"
        >
          <MessageSquare size={18} />

          {chat}
        </div>
      ))}
    </div>
  );
}

export default ChatSidebar;
