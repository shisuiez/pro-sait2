"use client";
import { useEffect, useState } from "react";
import { t } from '@/lib/language';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-6 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-cyan-300 border border-cyan-400 transition"
      title={t('navigation.toggleTheme', language)}
    >
      {theme === 'dark' ? t('navigation.lightTheme', language) : t('navigation.darkTheme', language)}
    </button>
  );
} 