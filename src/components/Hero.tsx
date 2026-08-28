import { ArrowRight, Mail, FileDown } from 'lucide-react';
import { developerProfile, coreTechList } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Hero = () => {
  return (
    <section id="about" className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      
      {/* Subtle Apple-style radial illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#86868b] tracking-wide">{developerProfile.status}</span>
        </div>

        {/* Apple-grade Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f5f5f7] leading-[1.08] mb-6">
          Angular Frontend Developer <br className="hidden sm:inline" />
          <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            & MERN Stack.
          </span>
        </h1>

        {/* Clean Bio */}
        <p className="text-lg sm:text-xl text-[#86868b] font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Hi, I'm {developerProfile.name}. {developerProfile.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="#projects"
            className="apple-button-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-tight shadow-sm"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={developerProfile.resumeUrl}
            download="Munawar_Ali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[#f5f5f7] hover:bg-white/[0.12] transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-[#86868b]" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="apple-button-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[#f5f5f7]"
          >
            <Mail className="w-3.5 h-3.5 text-[#86868b]" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Core Tech Stack Apple Pill Strip */}
        <div className="pt-8 border-t border-white/[0.06]">
          <p className="text-[11px] uppercase tracking-widest text-[#86868b] font-medium mb-4">
            Core Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {coreTechList.slice(0, 10).map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.14] transition-all"
              >
                <TechIcon name={tech.iconKey} className="w-3.5 h-3.5" />
                <span className="text-xs text-[#f5f5f7] font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quiet Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/[0.06] max-w-3xl mx-auto">
          {developerProfile.highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="whitespace-nowrap text-xl sm:text-2xl font-bold tracking-tight text-white">{item.value}</span>
              <span className="text-xs text-[#86868b] mt-1">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
