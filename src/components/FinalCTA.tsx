import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onBookConsultation: () => void;
  onTalkToTeam: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookConsultation, onTalkToTeam }) => {
  return (
    <section className="py-24 bg-slate-50/80 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          <span>ZERO PRESSURE • HIGH CLARITY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
          Your Next Stage of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
            Growth Starts Here.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us about your business. We'll help you identify what to build, what to improve and what to automate.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-xl shadow-blue-600/20 transform hover:-translate-y-0.5 text-base"
            id="final-cta-book-btn"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onTalkToTeam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all duration-200 shadow-xs text-base"
            id="final-cta-talk-btn"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Talk to Our Team</span>
          </button>
        </div>

        {/* Guarantee / trust indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            30-Minute Growth Audit
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Actionable Tech Recommendations
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            No Sales Obligation
          </span>
        </div>
      </div>
    </section>
  );
};
