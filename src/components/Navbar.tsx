import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

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
      <header className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full bg-neutral-950/75 border border-white/[0.08] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] w-full max-w-3xl transition-all duration-300">

        {/* Brand Name */}
        <a href="#" className="flex items-center gap-2.5 pl-1.5 group">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-sm sm:text-base font-semibold tracking-tight text-[#f5f5f7] group-hover:text-white transition-colors">
            {developerProfile.name.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[#86868b] font-normal">
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
              className={`px-3.5 py-1.5 rounded-full text-sm transition-all ${activeSection === link.id
                  ? 'text-white bg-white/[0.08] font-medium'
                  : 'text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.04]'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Action */}
        <div className="hidden sm:flex items-center">
          <a
            href={developerProfile.resumeUrl}
            download="Munawar_Ali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#f5f5f7] bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#86868b]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          className="sm:hidden p-1 text-[#86868b] hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 max-w-sm mx-auto p-4 rounded-3xl bg-neutral-950/90 border border-white/[0.1] backdrop-blur-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-150 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm text-[#f5f5f7] hover:bg-white/[0.08] transition-colors"
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
            className="mt-2 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors"
          >
            <span>Download Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
};
