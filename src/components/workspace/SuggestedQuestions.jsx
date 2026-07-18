const questions = [
  "Summarize this resume",

  "List technical skills",

  "Explain Spring Boot experience",

  "Generate interview questions",

  "Create ATS friendly resume",
];

function SuggestedQuestions() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">Suggested Questions</h2>

      <div className="space-y-3">
        {questions.map((question) => (
          <button
            key={question}
            className="w-full text-left bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;
