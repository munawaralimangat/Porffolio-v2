import { coreTechList } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-medium block mb-2">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
            Technologies and tools I work with daily to build modern full-stack web applications.
          </p>
        </div>

        {/* Squircle App-Icon Style Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {coreTechList.map((skill) => (
            <div
              key={skill.name}
              className="apple-card rounded-2xl p-4 flex flex-col items-center text-center justify-center gap-3 group"
            >
              {/* App-like Squircle Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--pill-hover)] transition-all shadow-inner">
                <TechIcon name={skill.iconKey} className="w-6 h-6" />
              </div>

              {/* Label & Details */}
              <div>
                <h3 className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-black dark:group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[10px] text-[var(--text-secondary)] block mt-0.5 font-medium">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Focus Highlight Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl apple-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap">Modern Websites & Enterprise Applications</h4>
            <p className="text-xs text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Specializing in building modern responsive websites, luxury e-commerce experiences (like Black Leaves), and scalable Enterprise SaaS architectures using React, Angular, TypeScript, and Node.js.
            </p>
          </div>
          <a
            href="#contact"
            className="apple-button-secondary px-5 py-2.5 rounded-full text-xs font-medium shrink-0"
          >
            Discuss a Project
          </a>
        </div>

      </div>
    </section>
  );
};
