const activities = [
  "Uploaded Resume.pdf",

  "Asked AI about Spring Boot",

  "Downloaded Kubernetes Guide",

  "Updated profile",

  "Created new chat",
];

function RecentActivity() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-bold mb-5">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="bg-slate-800 rounded-xl px-4 py-3">
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
