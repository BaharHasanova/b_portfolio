'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDarkStored = storedTheme !== 'light'; // default to dark
    setIsDark(isDarkStored);
    document.documentElement.classList.toggle('dark', isDarkStored);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="fixed top-5 right-5 z-50 w-14 h-8 rounded-full border border-purple/40 dark:border-blue/40 dark:bg-[#10132e] flex items-center px-1 transition-all"
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-300 ${
          isDark
            ? 'translate-x-0 text-purple bg-white'
            : 'translate-x-6 text-blue bg-white'
        }`}
      >
        {isDark ? '👩🏻‍💻' : '🎀'}
      </div>
    </button>
  );
}