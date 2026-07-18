import { Copy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

function CopyButton({ text }) {
  return (
    <CopyToClipboard text={text} onCopy={() => toast.success("Copied")}>
      <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
        <Copy size={16} />
        Copy
      </button>
    </CopyToClipboard>
  );
}

export default CopyButton;
