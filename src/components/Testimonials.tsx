import React from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Quote, AlertCircle, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-200 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
            <span>CLIENT PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            Partner Satisfaction.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            What forward-thinking businesses experience when transitioning to unified digital growth systems.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-500 text-[11px] font-mono shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Clearly labeled placeholder testimonials awaiting live verification sign-offs.</span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-8 flex flex-col justify-between relative group transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-600/30 group-hover:text-blue-600/60 transition-colors" />
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-950 tracking-wide">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.position}</p>
                  <p className="text-[11px] text-blue-700 font-mono font-semibold mt-0.5">{t.company}</p>
                </div>
                <span className="text-[9px] font-mono font-bold uppercase text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
