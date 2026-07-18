import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-lg"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-4xl font-bold mt-4">{value}</h2>
        </div>

        <div
          className={`h-16 w-16 rounded-2xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;
