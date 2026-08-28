import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-5 py-2.5 rounded-full bg-[var(--nav-bg)] border border-[var(--nav-border)] backdrop-blur-2xl shadow-[var(--card-shadow)] w-full max-w-3xl transition-all duration-300">

        {/* Brand Name */}
        <a href="#" className="flex items-center gap-2.5 pl-1.5 group shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-sm sm:text-base font-semibold tracking-tight text-[var(--text-primary)] group-hover:opacity-80 transition-opacity">
            {developerProfile.name.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[var(--text-secondary)] font-normal">
              {developerProfile.name.split(' ').slice(-1)[0]}
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-full text-sm transition-all ${
                activeSection === link.id
                  ? 'text-[var(--text-primary)] bg-[var(--pill-hover)] font-medium shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--pill-bg)]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Theme Toggle & Resume) */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full bg-[var(--pill-bg)] hover:bg-[var(--pill-hover)] border border-[var(--pill-border)] text-[var(--text-primary)] transition-all flex items-center justify-center cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Desktop Resume Action */}
          <div className="hidden sm:flex items-center">
            <a
              href={developerProfile.resumeUrl}
              download="Munawar_Ali_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="sm:hidden p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 max-w-sm mx-auto p-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-150 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm text-[var(--text-primary)] hover:bg-[var(--pill-hover)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={developerProfile.resumeUrl}
            download="Munawar_Ali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium apple-button-primary transition-colors"
          >
            <span>Download Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
};
