"use client";

import { useEffect, useSyncExternalStore } from "react";

const themeListeners = new Set<() => void>();

function subscribe(listener: () => void) {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
}

function getTheme() {
  return typeof window !== "undefined" && localStorage.getItem("apa-theme") === "dark";
}

function getServerTheme() {
  return false;
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  function toggleTheme() {
    localStorage.setItem("apa-theme", dark ? "light" : "dark");
    themeListeners.forEach((listener) => listener());
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
