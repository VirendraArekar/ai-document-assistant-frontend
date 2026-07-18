import { Brain } from "lucide-react";

function AISettings() {
  return (
    <div className="bg-slate-900 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-8">AI Configuration</h2>

      <div className="space-y-6">
        <div>
          <label>AI Provider</label>

          <select className="w-full mt-2 bg-slate-800 rounded-xl p-3">
            <option>Gemini</option>

            <option>OpenAI</option>

            <option>Ollama</option>
          </select>
        </div>

        <div>
          <label>Temperature</label>

          <input type="range" min="0" max="1" step="0.1" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default AISettings;
