import { ArrowUp } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <span className="text-[var(--text-primary)] font-medium">{developerProfile.name}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a>
          <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">Skills</a>
          <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>
    </footer>
  );
};
