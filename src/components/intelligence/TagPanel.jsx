const tags = ["Backend", "Frontend", "Cloud", "AI", "Database", "Security"];

function TagPanel() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">Generated Tags</h2>

      <div className="grid grid-cols-3 gap-3">
        {tags.map((tag) => (
          <div key={tag} className="bg-slate-800 rounded-xl py-3 text-center">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagPanel;
