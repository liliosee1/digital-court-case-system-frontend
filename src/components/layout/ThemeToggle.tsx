'use client';

import {useEffect, useState} from 'react';
import {Moon, Sun} from 'lucide-react';

const themeStorageKey = 'dccs-dark-mode';
const legacyThemeStorageKey = 'dccs-track-dark-mode';

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(themeStorageKey)
      ?? localStorage.getItem(legacyThemeStorageKey);
    const isDark = storedTheme === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggleTheme() {
    setDarkMode(current => {
      const next = !current;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem(themeStorageKey, String(next));
      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed bottom-4 right-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-navy shadow-panel transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flag-blue dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-300 dark:hover:bg-slate-700"
    >
      {darkMode ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
    </button>
  );
}
