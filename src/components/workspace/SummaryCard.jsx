const summary = [
  "9+ years of Full Stack Development",

  "Strong Spring Boot experience",

  "React + Next.js + Node.js",

  "Docker & Kubernetes knowledge",

  "AWS Cloud exposure",
];

function SummaryCard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">AI Summary</h2>

      <ul className="space-y-4">
        {summary.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SummaryCard;
