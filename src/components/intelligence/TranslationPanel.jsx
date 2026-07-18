function TranslationPanel() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">Translation</h2>

      <select className="w-full bg-slate-800 rounded-xl p-3">
        <option>English</option>

        <option>Hindi</option>

        <option>Marathi</option>

        <option>German</option>

        <option>Japanese</option>
      </select>

      <button className="mt-5 bg-blue-600 rounded-xl px-6 py-3">
        Translate
      </button>
    </div>
  );
}

export default TranslationPanel;
