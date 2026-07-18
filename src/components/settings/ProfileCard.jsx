import { User } from "lucide-react";

function ProfileCard() {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
      <div className="flex items-center gap-6">
        <img
          src="https://i.pravatar.cc/120"
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h2 className="text-2xl font-bold">Virendra</h2>

          <p className="text-slate-400">virendra@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
