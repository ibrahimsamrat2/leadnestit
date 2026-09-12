import React from 'react';

/**
 * GoFly-inspired subtle low-opacity vector graphics for white background.
 * Features organic topographic contour waves, dotted travel/tech route paths,
 * minimal geometric nodes, and gentle floating ambient accents.
 */
export const GoFlyBackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Topographic organic curves & contour lines (low opacity: 4% - 8%) */}
      <svg
        className="absolute -top-24 -right-24 w-[750px] h-[750px] text-blue-600/6 opacity-70 animate-float-slow"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 250 C120 180, 220 320, 320 220 C400 140, 450 280, 500 200"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M0 180 C80 120, 180 260, 280 160 C380 70, 420 210, 500 130"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M20 320 C100 250, 200 380, 300 300 C400 220, 440 340, 500 290"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="280" cy="160" r="4" fill="currentColor" />
        <circle cx="320" cy="220" r="3" fill="currentColor" />
      </svg>

      {/* Left side travel & tech contour pathways */}
      <svg
        className="absolute top-1/3 -left-32 w-[650px] h-[650px] text-emerald-600/5 opacity-80"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300 Q150 150 300 280 T500 220"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M20 240 Q170 90 320 220 T500 160"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="300" cy="280" r="3.5" fill="currentColor" />
        <circle cx="150" cy="150" r="2.5" fill="currentColor" />
      </svg>

      {/* Bottom right subtle compass / concentric wave rings */}
      <svg
        className="absolute -bottom-20 -right-20 w-[550px] h-[550px] text-slate-800/4 opacity-60"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
        <path d="M200 10 L200 390 M10 200 L390 200" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 4" />
      </svg>

      {/* Floating subtle geometric crosses and dots */}
      <div className="absolute top-[22%] left-[12%] text-blue-600/10 text-xl font-mono select-none animate-float-slow">
        +
      </div>
      <div className="absolute top-[48%] right-[10%] text-emerald-600/10 text-xl font-mono select-none">
        +
      </div>
      <div className="absolute top-[75%] left-[8%] text-slate-400/15 text-lg font-mono select-none">
        ✕
      </div>

      {/* Subtle soft gradient glows for modern clean depth */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[480px] bg-gradient-to-b from-blue-500/5 via-cyan-500/3 to-transparent blur-[120px] rounded-full" />
      <div className="absolute top-[40%] -right-32 w-[500px] h-[500px] bg-gradient-to-br from-green-500/4 to-transparent blur-[140px] rounded-full" />
    </div>
  );
};
