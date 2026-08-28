import { ArrowRight, Mail, FileDown } from 'lucide-react';
import { developerProfile, coreTechList } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Hero = () => {
  return (
    <section id="about" className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">

      {/* Minimal Apple-grade breathing ambient illumination */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-3xl pointer-events-none opacity-85 animate-aura-breathe"
        style={{ background: 'var(--glow-gradient)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[var(--text-secondary)] tracking-wide">{developerProfile.status}</span>
        </div>

        {/* Minimal Animated Headline with Multi-Color Hover Spectrum */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] mb-6 max-w-4xl mx-auto group cursor-default select-none">
          <span className="transition-all duration-300 group-hover:opacity-90">
            Full-Stack Developer
          </span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-black dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 animate-text-shimmer spectrum-hover inline-block">
            Building High-Performance Enterprise SaaS Applications.
          </span>
        </h1>

        {/* Clean Bio */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Hi, I'm {developerProfile.name}. {developerProfile.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="apple-button-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-tight shadow-md"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={developerProfile.resumeUrl}
            download="Munawar_Ali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-secondary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[var(--btn-secondary-hover)] transition-all shadow-sm"
          >
            <FileDown className="w-4 h-4 text-[var(--text-secondary)]" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="apple-button-secondary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium shadow-sm"
          >
            <Mail className="w-4 h-4 text-[var(--text-secondary)]" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Core Tech Stack Apple Pill Strip */}
        <div className="pt-8 border-t border-[var(--border-color)]">
          <p className="text-[11px] uppercase tracking-widest text-[var(--text-secondary)] font-medium mb-4">
            Core Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {coreTechList.slice(0, 10).map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] hover:bg-[var(--pill-hover)] transition-all"
              >
                <TechIcon name={tech.iconKey} className="w-3.5 h-3.5" />
                <span className="text-xs text-[var(--text-primary)] font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quiet Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mt-16 pt-10 border-t border-[var(--border-color)] max-w-4xl mx-auto">
          {developerProfile.highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center px-2">
              <span className="whitespace-nowrap text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">{item.value}</span>
              <span className="text-xs text-[var(--text-secondary)] mt-1.5 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
