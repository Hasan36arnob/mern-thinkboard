import { Link } from "react-router";
import { PlusIcon, SunIcon, MoonIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10 shadow-md sticky top-0 z-50 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">ThinkBoard</h1>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="btn btn-ghost btn-circle"
              onClick={toggleDark}
              type="button"
            >
              {dark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
            </button>
            <Link to={"/create"} className="btn btn-primary flex items-center gap-2 shadow hover:scale-105 transition-transform" aria-label="Create new note">
              <PlusIcon className="size-5" />
              <span className="hidden sm:inline">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
