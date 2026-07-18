const activities = [
  "Uploaded Resume.pdf",

  "Asked AI about Spring Boot",

  "Generated Interview Questions",

  "Uploaded Docker Guide.pdf",
];

function RecentActivity() {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div key={index} className="border-b border-slate-800 pb-3">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
