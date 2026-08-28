import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, '');

  switch (normalized) {
    // Angular
    case 'angular':
    case 'angularjs':
    case 'angular17':
    case 'angular18':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5L3.5 5.5L4.8 17.5L12 21.5L19.2 17.5L20.5 5.5L12 2.5Z"
            fill="#DD0031"
          />
          <path
            d="M12 2.5V21.5L19.2 17.5L20.5 5.5L12 2.5Z"
            fill="#C3002F"
          />
          <path
            d="M12 6.2L7.5 16.2H9.6L10.5 14H13.5L14.4 16.2H16.5L12 6.2ZM12.8 12.3H11.2L12 10.2L12.8 12.3Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // TypeScript
    case 'typescript':
    case 'ts':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M13.5 11.5V13.2H15.8C16.8 13.2 17.3 13.6 17.3 14.3C17.3 15.2 16.6 15.6 15.4 15.6C14.4 15.6 13.8 15.3 13.4 14.9L12.5 16.2C13.2 16.9 14.3 17.3 15.6 17.3C17.7 17.3 19.2 16.2 19.2 14.4C19.2 13.2 18.4 12.3 17 11.9C18.1 11.5 18.8 10.7 18.8 9.7C18.8 8.1 17.4 7.2 15.5 7.2C14.4 7.2 13.4 7.6 12.8 8.1L13.7 9.4C14.1 9 14.8 8.7 15.5 8.7C16.4 8.7 17 9.1 17 9.8C17 10.5 16.3 11 15.2 11H13.5V11.5ZM6.5 7.4V9H8.8V17.2H10.7V9H13V7.4H6.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // JavaScript
    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 17.5V9.5H9.5V15.5C9.5 16.6 8.9 17.5 7.5 17.5ZM13 14.8C13.5 15.6 14.4 16.2 15.6 16.2C16.8 16.2 17.6 15.5 17.6 14.4C17.6 13.3 16.8 12.8 15.4 12.2L14.7 11.9C13.5 11.4 12.8 10.6 12.8 9.4C12.8 7.8 14.2 6.8 16.1 6.8C17.4 6.8 18.5 7.4 19.1 8.5L17.5 9.5C17.1 8.8 16.6 8.5 16 8.5C15.2 8.5 14.7 8.9 14.7 9.5C14.7 10.1 15.1 10.4 16 10.8L16.7 11.1C18.2 11.7 19.5 12.5 19.5 14.4C19.5 16.4 17.8 17.8 15.5 17.8C13.7 17.8 12.4 16.7 11.5 15.2L13 14.8Z"
            fill="#000000"
          />
        </svg>
      );

    // RxJS
    case 'rxjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#18181b" stroke="#E01A76" strokeWidth="1.5" />
          <path
            d="M7 16L12 7L17 16M9 13.5H15"
            stroke="#E01A76"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // Angular Material
    case 'angularmaterial':
    case 'material':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 6v12l8 4 8-4V6l-8-4z"
            fill="#009688"
          />
          <path
            d="M12 6l-5 9h2.2l1-2h3.6l1 2H17L12 6zm-1 5.5l1.3-2.8 1.3 2.8H11z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ApexCharts
    case 'apexcharts':
    case 'charts':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#008FFB" />
          <path
            d="M6 18V13M10 18V9M14 18V11M18 18V6"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    // HTML5
    case 'html5':
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#E34F26" />
          <path d="M12 4.5V20.3L17.2 18.8L18.4 4.5H12Z" fill="#EF652A" />
          <path d="M8 8H16L15.7 11.5H12V13.5H15.5L15 17L12 17.8V16L13.8 15.5L14 13.5H8L7.6 9.5H8V8Z" fill="#FFFFFF" />
        </svg>
      );

    // CSS3
    case 'css3':
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#1572B6" />
          <path d="M12 4.5V20.3L17.2 18.8L18.4 4.5H12Z" fill="#33A9DC" />
          <path d="M8 8H16L15.7 11.5H12V13.5H15.5L15 17L12 17.8V16L13.8 15.5L14 13.5H8L7.6 9.5H8V8Z" fill="#FFFFFF" />
        </svg>
      );

    // Tailwind CSS
    case 'tailwindcss':
    case 'tailwind':
    case 'tailwindcssv4':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      );

    // REST APIs
    case 'restapis':
    case 'restapi':
    case 'api':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0284c7" />
          <path
            d="M6 12H18M14 8L18 12L14 16"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // Node.js
    case 'nodejs':
    case 'node':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.7l-6.7-3.8V8.1L12 4.3l6.7 3.8v7.8z"
            fill="#5FA04E"
          />
          <path
            d="M12 6.8L6.8 9.8v4.4L12 17.2l5.2-3v-4.4L12 6.8z"
            fill="#68A063"
            opacity="0.4"
          />
        </svg>
      );

    // Express.js
    case 'express':
    case 'expressjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#27272a" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="#34d399"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
          >
            ex
          </text>
        </svg>
      );

    // MongoDB
    case 'mongodb':
    case 'mongo':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 1.5C11.6 1.8 7 6.6 7 13.2C7 18.2 10.3 21.6 11.7 22.4C11.9 22.5 12.1 22.5 12.3 22.4C13.7 21.6 17 18.2 17 13.2C17 6.6 12.4 1.8 12 1.5Z"
            fill="#47A248"
          />
          <path
            d="M12 2.5V22C12.1 22 12.2 21.9 12.3 21.9C13.7 21.1 16.5 17.9 16.5 13.2C16.5 7.1 12.4 2.8 12 2.5Z"
            fill="#499D4A"
          />
        </svg>
      );

    // React
    case 'react':
    case 'react19':
    case 'reactjs':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    // Redux Toolkit
    case 'redux':
    case 'reduxtoolkit':
    case 'rtk':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#764ABC" />
          <path
            d="M15.6 12.3c-.3-.2-.7-.3-1.1-.3-.6 0-1.1.2-1.5.6l-1 1-1-1c-.4-.4-.9-.6-1.5-.6-.4 0-.8.1-1.1.3-.8.5-1.1 1.4-.9 2.3.3.9 1 1.6 2 1.6h6.1c.9 0 1.7-.7 2-1.6.2-.9-.1-1.8-.9-2.3z"
            fill="#FFFFFF"
          />
          <circle cx="9.5" cy="8.5" r="1.5" fill="#FFFFFF" />
          <circle cx="14.5" cy="8.5" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    // Git
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1L12.5 9.7v5.8c.2.1.4.3.5.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.2-.2.5-.4.8-.5V9.4c-.3-.1-.6-.3-.8-.5-.6-.6-.7-1.4-.4-2.1L7.1 4.1 2.4 8.8c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2.1z" />
        </svg>
      );

    // GitHub
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );

    // Postman
    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path
            d="M13.8 8.2c-.3-.4-.8-.6-1.3-.6-.8 0-1.5.6-1.5 1.5 0 .4.2.8.5 1.1l3.5 3.5c.3.3.7.5 1.1.5.8 0 1.5-.6 1.5-1.5 0-.4-.2-.8-.5-1.1L13.8 8.2zM9.5 11.2c-.4-.4-1-.4-1.4 0l-2.3 2.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1 0-1.4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // Vite
    case 'vite':
    case 'vitejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.7 3.5L12.9 20.3c-.4.7-1.4.7-1.8 0L2.3 3.5c-.4-.8.2-1.7 1.1-1.6l8.2 1.3c.3 0 .7 0 1-.1l8-1.2c.9-.1 1.5.8 1.1 1.6z"
            fill="url(#vite-grad)"
          />
          <path
            d="M14.5 2.5L7.8 13.5h3.8l-1.2 7.2L17.5 9h-3.9l.9-6.5z"
            fill="#FFD62E"
          />
          <defs>
            <linearGradient id="vite-grad" x1="2.3" y1="1.9" x2="21.7" y2="20.3" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    // npm
    case 'npm':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#CB3837" />
          <path d="M4 4h16v16H4V4zm3 3v10h5V9.5h2.5V17H17V7H7z" fill="#FFFFFF" />
        </svg>
      );

    // Netlify
    case 'netlify':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00C7B7" />
          <path
            d="M12 4L6 10l6 6 6-6-6-6zm-4.2 8.8L5 15.6l7 4.4 7-4.4-2.8-2.8-4.2 4.2-4.2-4.2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // JWT
    case 'jwt':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000000" />
          <path
            d="M6.5 7h2v6.5c0 1.1-.9 2-2 2s-2-.9-2-2h1.5c0 .3.2.5.5.5s.5-.2.5-.5V7zm5.5 0h1.5l1.5 6 1.5-6h1.5l-2.3 8.5h-1.5L12 7zm7.5 0H22v1.5h-1.5V15.5H19V8.5h-1.5V7h2z"
            fill="#D63AFF"
          />
        </svg>
      );

    // VS Code
    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#007ACC" />
          <path
            d="M17.5 3L8.5 10.5L4.5 7.5L3 8.5L6.5 12L3 15.5L4.5 16.5L8.5 13.5L17.5 21L21 19.5V4.5L17.5 3ZM17.5 16.2L11.5 12L17.5 7.8V16.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // Claude Code (Official)
    case 'claude':
    case 'claudecode':
    case 'anthropic':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Claude Code</title>
          <path
            clipRule="evenodd"
            d="M20.998 10.949H24v3.102h-3v3.028h-1.487V20H18v-2.921h-1.487V20H15v-2.921H9V20H7.488v-2.921H6V20H4.487v-2.921H3V14.05H0V10.95h3V5h17.998v5.949zM6 10.949h1.488V8.102H6v2.847zm10.51 0H18V8.102h-1.49v2.847z"
            fill="#D97757"
            fillRule="evenodd"
          />
        </svg>
      );

    // Codex (OpenAI Official)
    case 'openai':
    case 'openaicodex':
    case 'codex':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Codex (OpenAI)</title>
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"
            fill="#10A37F"
          />
        </svg>
      );

    // Google Gemini (Official Gradient Star)
    case 'gemini':
    case 'googlegemini':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0F172A" />
          <path
            d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z"
            fill="url(#gemini-grad)"
          />
          <defs>
            <linearGradient id="gemini-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" />
              <stop offset="0.45" stopColor="#60A5FA" />
              <stop offset="0.8" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
      );

    // Default fallback icon
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
  }
};
