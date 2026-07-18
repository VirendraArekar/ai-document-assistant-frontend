function DangerZone() {
  return (
    <div className="bg-red-950 border border-red-700 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-red-400">Danger Zone</h2>

      <p className="mt-4 text-slate-300">Permanently delete your account.</p>

      <button className="mt-6 bg-red-600 px-6 py-3 rounded-xl">
        Delete Account
      </button>
    </div>
  );
}

export default DangerZone;
