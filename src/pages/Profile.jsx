import DashboardLayout from "../layouts/DashboardLayout";
import { useSelector } from "react-redux";
import { User, Mail, Save } from "lucide-react";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          <div className="flex justify-center mb-8">
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
          </div>

          <div className="grid gap-6">
            <div>
              <label className="text-slate-400 text-sm">Full Name</label>

              <div className="relative mt-2">
                <User
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  defaultValue={user?.name || ""}
                  className="w-full bg-slate-800 rounded-xl py-3 pl-12 pr-4 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm">Email</label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  defaultValue={user?.email || ""}
                  className="w-full bg-slate-800 rounded-xl py-3 pl-12 pr-4 border border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <button className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-xl py-3 font-semibold transition">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
