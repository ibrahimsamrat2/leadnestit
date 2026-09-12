import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Activity, Layers, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface BenchmarkPillar {
  id: string;
  icon: React.ElementType;
  metric: string;
  metricHighlight?: string;
  label: string;
  labelBn: string;
  description: string;
  descriptionBn: string;
  badge: string;
  badgeBn: string;
  color: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  details: string;
}

export const TrustBar: React.FC = () => {
  const { currency } = useCurrency();
  const isUSD = currency === 'USD';
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const pillars: BenchmarkPillar[] = [
    {
      id: 'speed',
      icon: Zap,
      metric: '< 30s',
      label: 'Lead Response Velocity',
      labelBn: 'তাৎক্ষণিক লিড রেসপন্স',
      description: 'Zero-latency automated routing and SMS/WhatsApp notification triggers',
      descriptionBn: 'লিড আসার সাথে সাথে ৩০ সেকেন্ডের মধ্যে অটোমেটেড রেসপন্স ও নোটিফিকেশন',
      badge: 'Zero-Latency SLA',
      badgeBn: 'জিরো-ল্যাটেন্সি SLA',
      color: {
        bg: 'bg-amber-500/10',
        border: 'hover:border-amber-400/60',
        text: 'text-amber-600 dark:text-amber-400',
        badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
        badgeText: 'text-amber-700',
        accent: 'from-amber-500 to-orange-500',
      },
      details: 'Instant webhooks connect directly to your CRM, WhatsApp & calendar booking without drop-offs.',
    },
    {
      id: 'integration',
      icon: Activity,
      metric: '100%',
      label: 'Integrated Data Pipeline',
      labelBn: 'পূর্ণাঙ্গ ইন্টিগ্রেটেড পাইপলাইন',
      description: 'Unified CRM, Meta/Google CAPI, and conversion analytics without data silos',
      descriptionBn: 'সিআরএম, মেটা/গুগল ট্র্যাকিং ও অ্যানালিটিক্স একই পাইপলাইনে সংযুক্ত',
      badge: 'Full-Stack Sync',
      badgeBn: 'ফুল-স্ট্যাক সিঙ্ক',
      color: {
        bg: 'bg-blue-500/10',
        border: 'hover:border-blue-400/60',
        text: 'text-blue-600 dark:text-blue-400',
        badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
        badgeText: 'text-blue-700',
        accent: 'from-blue-600 to-cyan-500',
      },
      details: 'Eliminates attribution blindspots with server-side conversion tracking & automated lifecycle sync.',
    },
    {
      id: 'reliability',
      icon: ShieldCheck,
      metric: '99.9%',
      label: 'Platform Architecture Uptime',
      labelBn: 'হাই-অ্যাভেইলেবিলিটি আর্কিটেকচার',
      description: 'High-availability cloud containers with round-the-clock telemetry monitoring',
      descriptionBn: '২৪/৭ প্রোডাকশন ক্লাউড ও কনটেইনার মনিটরিং নিশ্চিত করে নিরবচ্ছিন্ন সার্ভিস',
      badge: 'High Availability',
      badgeBn: 'হাই অ্যাভেইলেবিলিটি',
      color: {
        bg: 'bg-emerald-500/10',
        border: 'hover:border-emerald-400/60',
        text: 'text-emerald-600 dark:text-emerald-400',
        badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        badgeText: 'text-emerald-700',
        accent: 'from-emerald-600 to-teal-500',
      },
      details: 'Built with enterprise-grade resilience to prevent traffic spikes or peak ad runs from failing.',
    },
    {
      id: 'synergy',
      icon: Layers,
      metric: '3-in-1',
      label: 'Unified Growth Partner',
      labelBn: 'এক ছাদের নিচে সব সল্যুশন',
      description: 'Engineering, acquisition marketing, and operations under a single roof',
      descriptionBn: 'ডিজিটাল আর্কিটেকচার, পেইড অ্যাডস ফানেল এবং অটোমেশন একসাথে',
      badge: 'Build • Grow • Automate',
      badgeBn: 'বিল্ড • গ্রো • অটোমেট',
      color: {
        bg: 'bg-indigo-500/10',
        border: 'hover:border-indigo-400/60',
        text: 'text-indigo-600 dark:text-indigo-400',
        badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        badgeText: 'text-indigo-700',
        accent: 'from-indigo-600 to-violet-600',
      },
      details: 'No finger-pointing between developers and marketers — we align your code directly to revenue.',
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-slate-200/80 relative overflow-hidden"
      id="performance-benchmarks"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Authoritative Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{isUSD ? 'PERFORMANCE BENCHMARKS & SLA' : 'পারফরম্যান্স বেঞ্চমার্ক ও নির্ভরযোগ্যতা'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight"
          >
            {isUSD ? (
              <>
                Engineered for Velocity.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                  Calibrated for Revenue.
                </span>
              </>
            ) : (
              <>
                সর্বোচ্চ স্পিড ও স্কেলের জন্য{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                  বিশেষভাবে ডিজাইন করা আর্কিটেকচার
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-sm text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed"
          >
            {isUSD
              ? 'Every web application and acquisition engine we deploy is bound to strict engineering standards — eliminating latency, drop-offs, and fragmented attribution.'
              : 'আমাদের তৈরি প্রতিটি সিস্টেম আন্তর্জাতিক মানদণ্ডে পরীক্ষিত — যা আপনার প্রতিটি লিড, ডাটা ও ট্রাফিকের শতভাগ রূপান্তর নিশ্চিত করে।'}
          </motion.p>
        </div>

        {/* 4 Interactive Animated Benchmark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = activeHoverId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseEnter={() => setActiveHoverId(pillar.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`relative group rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default ${pillar.color.border}`}
              >
                {/* Glowing Top Edge Accent Bar on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Top Bar: Icon + Live SLA Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <motion.div
                      animate={isHovered ? { scale: 1.1, rotate: [0, -6, 6, 0] } : { scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${pillar.color.bg} ${pillar.color.text} shadow-xs`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>

                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold tracking-tight ${pillar.color.badgeBg}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      <span>{isUSD ? pillar.badge : pillar.badgeBn}</span>
                    </div>
                  </div>

                  {/* Primary Large Metric with Optical Typography */}
                  <div className="flex items-baseline gap-1.5 mb-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 font-mono tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                      {pillar.metric}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 opacity-60 group-hover:opacity-100" />
                  </div>

                  {/* Pillar Label */}
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-2">
                    {isUSD ? pillar.label : pillar.labelBn}
                  </h3>

                  {/* Descriptive Context */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {isUSD ? pillar.description : pillar.descriptionBn}
                  </p>
                </div>

                {/* Micro Technical Guarantee Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 font-medium leading-snug">
                    {pillar.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Micro Proof Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500"
        >
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-slate-700">
              {isUSD ? 'LIVE TELEMETRY GUARANTEED' : 'লাইভ টেলিমেট্রি মনিটরড'}
            </span>
            <span className="text-slate-300">•</span>
            <span>{isUSD ? 'Zero third-party vendor lock-in' : 'কোনো থার্ড-পার্টি ভেন্ডর লক-ইন নেই'}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-600">
            <span>SOC-2 Aligned</span>
            <span>•</span>
            <span>GDPR & CCPA Compliant</span>
            <span>•</span>
            <span>REST & GraphQL APIs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

