const questions = [
  "What is Spring Boot?",

  "Explain JWT.",

  "What is Docker?",

  "What is Kubernetes?",

  "Explain REST API.",
];

function InterviewPanel() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">Interview Questions</h2>

      <div className="space-y-3">
        {questions.map((question) => (
          <div key={question} className="bg-slate-800 rounded-xl p-4">
            {question}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewPanel;
