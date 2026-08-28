import { aiAssistedTools } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Sparkles } from 'lucide-react';

export const AiAssisted = () => {
  return (
    <section id="ai-workflow" className="py-24 md:py-32 relative z-10 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-xs text-[var(--text-secondary)] mb-3">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="font-medium tracking-wide">Developer Productivity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            AI-Assisted Development
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Leveraging intelligent development assistants to streamline codebase analysis, accelerate problem-solving, and boost productivity while maintaining rigorous engineering standards.
          </p>
        </div>

        {/* AI Assistants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiAssistedTools.map((tool) => (
            <div
              key={tool.name}
              className="apple-card rounded-3xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Provider */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--pill-hover)] transition-all shadow-inner">
                    <TechIcon name={tool.iconKey} className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--text-secondary)]">
                    {tool.provider}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {tool.name}
                </h3>

                {/* Summary Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {tool.summary}
                </p>
              </div>

              {/* Capabilities Pill Badges */}
              <div className="pt-5 border-t border-[var(--border-subtle)]">
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] block font-medium mb-2">
                  Primary Usage
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tool.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--text-primary)] font-medium"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
