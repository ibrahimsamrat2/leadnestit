import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { ArrowRight, AlertCircle } from 'lucide-react';

interface CaseStudiesProps {
  onConsultCaseStudy: (industry: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onConsultCaseStudy }) => {
  return (
    <section className="py-24 bg-white relative" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
            <span>PERFORMANCE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            Work Designed to Create Business Impact.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Case study architectural patterns showcasing how unified web design, conversion funnels,
            and AI automation solve high-friction bottlenecks.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-mono">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Notice: Sample placeholder studies with template metrics ([Client Name], +XX%) until verified live client release.</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group shadow-xs"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider block">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                      {study.clientName}
                    </h3>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-right shrink-0">
                    <span className="text-sm font-mono font-black text-blue-700 block">
                      {study.resultMetric}
                    </span>
                    <span className="text-[9px] text-slate-500 font-mono font-medium">Sample Metric</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <strong className="text-slate-900 font-bold block mb-0.5">The Challenge:</strong>
                    <p className="text-slate-600 leading-relaxed font-normal">{study.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-blue-700 font-bold block mb-0.5">The LeadNest Solution:</strong>
                    <p className="text-slate-600 leading-relaxed font-normal">{study.solution}</p>
                  </div>
                  <div>
                    <strong className="text-emerald-700 font-bold block mb-0.5">Project Result:</strong>
                    <p className="text-slate-600 leading-relaxed font-normal">{study.resultDescription}</p>
                  </div>
                </div>

                {/* Services tags */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {study.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA trigger */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 italic">
                  [Sample Placeholder Case Study]
                </span>
                <button
                  onClick={() => onConsultCaseStudy(study.industry)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
