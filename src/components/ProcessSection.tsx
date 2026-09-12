import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/content';
import {
  ArrowRight,
  Search,
  Compass,
  Code2,
  Rocket,
  TrendingUp,
  Cpu,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ProcessSectionProps {
  onStartProcess: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProcess }) => {
  const getStepIcon = (index: number) => {
    const props = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };
    switch (index) {
      case 0: return <Search {...props} />;
      case 1: return <Compass {...props} />;
      case 2: return <Code2 {...props} />;
      case 3: return <Rocket {...props} />;
      case 4: return <TrendingUp {...props} />;
      case 5: return <Cpu {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const getStepColor = (index: number) => {
    switch (index) {
      case 0:
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          iconBox: 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
          accent: 'from-blue-600 to-cyan-500',
          hoverBorder: 'hover:border-blue-400'
        };
      case 1:
        return {
          badge: 'bg-sky-50 text-sky-700 border-sky-200',
          iconBox: 'bg-sky-50 text-sky-600 border-sky-200 group-hover:bg-sky-600 group-hover:text-white',
          accent: 'from-sky-500 to-indigo-500',
          hoverBorder: 'hover:border-sky-400'
        };
      case 2:
        return {
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          iconBox: 'bg-indigo-50 text-indigo-600 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white',
          accent: 'from-indigo-600 to-blue-500',
          hoverBorder: 'hover:border-indigo-400'
        };
      case 3:
        return {
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          iconBox: 'bg-amber-50 text-amber-600 border-amber-200 group-hover:bg-amber-600 group-hover:text-white',
          accent: 'from-amber-500 to-orange-500',
          hoverBorder: 'hover:border-amber-400'
        };
      case 4:
        return {
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          iconBox: 'bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
          accent: 'from-emerald-500 to-teal-500',
          hoverBorder: 'hover:border-emerald-400'
        };
      case 5:
      default:
        return {
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          iconBox: 'bg-purple-50 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
          accent: 'from-purple-600 to-indigo-500',
          hoverBorder: 'hover:border-purple-400'
        };
    }
  };

  return (
    <section className="pt-8 pb-24 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden" id="process">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Execution Cycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative items-stretch">
          {PROCESS_STEPS.map((step, idx) => {
            const colors = getStepColor(idx);

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.38, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className={`group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 ${colors.hoverBorder} transition-shadow duration-300 shadow-xs hover:shadow-xl hover:shadow-slate-200/80 flex flex-col justify-between overflow-hidden`}
                id={`process-step-${step.step}`}
              >
                {/* Delicate Top Gradient Line on Hover (matching Pillar 01, 02, 03) */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Step Header with Number, Subtitle Badge, & Step Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl font-black font-mono text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.step}
                      </span>
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                        {step.subtitle}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105 ${colors.iconBox}`}
                    >
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Footer Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>Phase {step.step} of 0{PROCESS_STEPS.length}</span>
                  </div>
                  <span className="flex items-center gap-1 text-slate-500 group-hover:text-blue-600 transition-colors font-bold">
                    <span>Next Milestone</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onStartProcess}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:shadow-md transition-all text-sm cursor-pointer hover:scale-102 active:scale-98"
            id="process-timeline-cta"
          >
            <span>Discuss Your Project Timeline</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
