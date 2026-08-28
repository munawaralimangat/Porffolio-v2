import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise SaaS', 'MERN Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#86868b] font-medium block mb-2">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7]">
              Selected Projects
            </h2>
          </div>

          {/* Minimal Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="apple-card rounded-3xl p-8 flex flex-col justify-between group"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868b]">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#86868b] hover:text-white transition-colors"
                        title="Personal Project Source Code"
                      >
                        <TechIcon name="github" className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-[#86868b]/70 font-medium px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.04]">
                        Enterprise
                      </span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-white hover:text-[#86868b] transition-colors"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f5f7] mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#86868b] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Outcome Callout */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] mb-6">
                  <p className="text-xs text-[#f5f5f7]/90 leading-snug">
                    <span className="text-[#86868b] block text-[10px] uppercase tracking-wider mb-0.5">Impact</span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#86868b]"
                  >
                    <TechIcon name={tag} className="w-3 h-3 shrink-0" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
