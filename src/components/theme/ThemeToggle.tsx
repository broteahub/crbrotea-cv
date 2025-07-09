'use client';

import { useTheme } from '@/contexts/theme.context';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-2xl bg-surface/90 border border-accent/20 backdrop-blur-sm hover:bg-surface hover:border-accent/40 transition-all duration-300 group overflow-hidden"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {/* Brotea-style gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-accent transition-all duration-300 group-hover:rotate-180 group-hover:scale-110"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-accent transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </div>
      
      {/* Brotea-style hover effect */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}