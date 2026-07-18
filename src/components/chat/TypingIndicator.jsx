import { ClipLoader } from "react-spinners";

function TypingIndicator() {
  return (
    <div className="flex gap-4 mt-5">
      <ClipLoader color="#3b82f6" size={20} />

      <span>AI is thinking...</span>
    </div>
  );
}

export default TypingIndicator;
