import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  // Initialize theme: check localStorage, fallback to system preference
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false; // SSR safe
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    // No saved preference, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Optional: listen to system theme changes and sync if no localStorage override
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme) return; // do nothing if user set preference

      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="rounded bg-gray-300 px-4 py-2 text-black dark:bg-gray-700 dark:text-white"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
