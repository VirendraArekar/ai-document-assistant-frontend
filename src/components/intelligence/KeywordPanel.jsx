const keywords = [
  "Spring Boot",

  "React",

  "Docker",

  "Kubernetes",

  "Redis",

  "JWT",

  "LangChain4j",

  "Gemini",
];

function KeywordPanel() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">Keywords</h2>

      <div className="flex flex-wrap gap-3">
        {keywords.map((keyword) => (
          <span key={keyword} className="bg-blue-600 rounded-full px-4 py-2">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

export default KeywordPanel;
