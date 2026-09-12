import React from 'react';
import { ArrowLeft, Sparkles, Home } from 'lucide-react';

interface PageBannerProps {
  badge?: string;
  title: string;
  subtitle: string;
  onBackToHome: () => void;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  badge,
  title,
  subtitle,
  onBackToHome,
}) => {
  return (
    <div className="relative pt-32 sm:pt-36 pb-10 sm:pb-14 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100 overflow-hidden">
      {/* Subtle low opacity ambient graphics */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-blue-500/8 via-cyan-500/4 to-transparent blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 select-none">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-blue-600 font-bold">{title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-3xl">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>{badge}</span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-slate-500" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
