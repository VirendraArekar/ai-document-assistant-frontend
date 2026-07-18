function EmptyChat() {
    return (
        <div className="flex h-full justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    🤖 AI Assistant
                </h1>
                <p className="mt-4 text-gray-400">
                    Upload a document and ask anything.
                </p>
            </div>
        </div>
    );
}

export default EmptyChat;