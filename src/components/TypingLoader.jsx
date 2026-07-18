import { ClipLoader } from "react-spinners";

function TypingLoader() {
    return (
        <div className="flex items-center gap-3">
            <ClipLoader
                size={18}
                color="#3B82F6"
            />
            <span>
                AI is typing...
            </span>
        </div>
    );
}

export default TypingLoader;