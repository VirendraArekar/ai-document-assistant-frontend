function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-blue-600",
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div className={`${color} p-4 rounded-xl`}>
          <Icon size={26} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
