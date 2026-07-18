import { useState } from "react";

import SearchBar from "./navbar/SearchBar";
import NotificationDropdown from "./navbar/NotificationDropdown";
import UserDropdown from "./navbar/UserDropdown";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex justify-between items-center px-8">
      <SearchBar value={search} onChange={setSearch} />

      <div className="flex items-center gap-6">
        <NotificationDropdown />

        <UserDropdown />
      </div>
    </header>
  );
}

export default Navbar;
