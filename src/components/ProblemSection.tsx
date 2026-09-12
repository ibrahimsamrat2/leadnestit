import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Zap,
  Sparkles,
  Bot,
  Globe,
  Target,
  Workflow,
  TrendingUp,
  ShieldAlert,
  Activity,
  Check,
  ChevronRight
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface ProblemSectionProps {
  onOpenConsultation: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenConsultation }) => {
  const { currency } = useCurrency();
  const isBDT = currency === 'BDT';

  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);

  const commonProblems = [
    {
      id: 0,
      solvedByPillar: 1,
      title: "Website doesn't generate enough leads",
      titleBn: "ওয়েবসাইট পর্যাপ্ত কোয়ালিফাইড লিড তৈরি করে না",
      description: "Visitors land on the site, read a few paragraphs, and leave without submitting an inquiry or taking action.",
      descriptionBn: "ভিজিটর পেজে এসে কোনো মেসেজ বা অর্ডার না করেই বেরিয়ে যায়—হাই বাউন্স রেট ও জিরো কনভার্সন।",
      impactBadge: "High Bounce Rate",
      lossStat: "-70% Lost Inquiries"
    },
    {
      id: 1,
      solvedByPillar: 2,
      title: "Marketing doesn't convert",
      titleBn: "অ্যাডসে খরচ হলেও সেলস কনভার্ট হয় না",
      description: "Ad dollars are spent on Meta or Google, but the traffic bounces because the landing page message doesn't match.",
      descriptionBn: "মেটা বা গুগলে অ্যাড চললেও ট্রাফিকের সাথে ল্যান্ডিং পেজের মেসেজ না মেলায় বিজ্ঞাপন খরচ গচ্চা যায়।",
      impactBadge: "Wasted Ad Spend",
      lossStat: "High CPA & Low ROI"
    },
    {
      id: 2,
      solvedByPillar: 3,
      title: "Leads are not followed up",
      titleBn: "লিড আসার পর দ্রুত ফলো-আপ হয় না",
      description: "Inquiries sit in an email inbox for hours or days. By the time someone calls back, the buyer has already moved on.",
      descriptionBn: "ইনবক্সে লিড ঘণ্টার পর ঘণ্টা পড়ে থাকে। রেসপন্স করতে করতে কাস্টমার অন্য কারো কাছ থেকে কিনে ফেলে।",
      impactBadge: "Slow Response Gap",
      lossStat: "Cold Prospect Drop-off"
    },
    {
      id: 3,
      solvedByPillar: 3,
      title: "Business processes are manual",
      titleBn: "দৈনন্দিন কাজগুলো এখনও ম্যানুয়াল স্প্রেডশিটে",
      description: "Your team spends half their day copying data into spreadsheets, generating quotes, and typing repetitive emails.",
      descriptionBn: "টিমের মূল্যবান সময় নষ্ট হয় ডাটা এন্ট্রি, ইনভয়েস তৈরি ও একই ইমেইল বারবার লেখার মতো একঘেয়ে কাজে।",
      impactBadge: "Staff Fatigue",
      lossStat: "4+ Hrs Wasted Daily"
    },
    {
      id: 4,
      solvedByPillar: 3,
      title: "Customer support takes too much time",
      titleBn: "কাস্টমার সাপোর্টে অনেক সময় নষ্ট হয়",
      description: "Simple, repetitive customer inquiries tie up staff when they should be focusing on high-ticket sales fulfillment.",
      descriptionBn: "সাধারণ সাধারণ প্রশ্নে সাপোর্ট টিম আটকে থাকে, ফলে বড় ও গুরুত্বপূর্ণ ক্লায়েন্টদের সময় দেওয়া যায় না।",
      impactBadge: "Support Bottleneck",
      lossStat: "Delayed Closures"
    },
    {
      id: 5,
      solvedByPillar: 0, // Solved by full unified system
      title: "Data is scattered across multiple platforms",
      titleBn: "ডাটা বিভিন্ন প্ল্যাটফর্মে ছড়িয়ে ছিটিয়ে থাকে",
      description: "Your website, ad manager, WhatsApp, CRM, and accounting software don't talk to each other, creating blind spots.",
      descriptionBn: "ওয়েবসাইট, হোয়াটসঅ্যাপ, ফেসবুক অ্যাডস ও সিআরএম একসাথে সিন্ক না থাকায় সঠিক সিদ্ধান্ত নেওয়া যায় না।",
      impactBadge: "Data Silos",
      lossStat: "Zero Single View"
    }
  ];

  const enginePillars = [
    {
      step: "01",
      id: 1,
      title: "High-Converting Digital Foundation",
      titleBn: "হাই-কনভার্টিং ডিজিটাল আর্কিটেকচার",
      subtitle: "Lightning-fast Next.js architecture built to convert cold visitors into buyers.",
      subtitleBn: "সুপারফাস্ট স্পিড ও সাইকোলজিক্যাল ফানেল ডিজাইন যা কোল্ড ট্রাফিককে লিডে রূপান্তর করে।",
      icon: Globe,
      metricTag: "< 1.2s Load • 4x Conversion",
      gradient: "from-blue-600 to-cyan-500",
      accentBg: "bg-blue-50/80 border-blue-200",
      accentText: "text-blue-700",
      solvesProblemIds: [0]
    },
    {
      step: "02",
      id: 2,
      title: "Targeted Traffic & Funnel Alignment",
      titleBn: "টার্গেটেড ট্রাফিক ও ফানেল অ্যালাইনমেন্ট",
      subtitle: "Every advertising dollar is tracked and synchronized with dedicated high-intent landing pages.",
      subtitleBn: "প্রতিটি অ্যাডস ডলার সরাসরি রেজাল্ট-ওরিয়েন্টেড ল্যান্ডিং পেজে এনে গ্রাহক অধিগ্রহণ খরচ কমায়।",
      icon: Target,
      metricTag: "3.8x+ ROI • Zero Ad Waste",
      gradient: "from-sky-600 to-blue-600",
      accentBg: "bg-sky-50/80 border-sky-200",
      accentText: "text-sky-700",
      solvesProblemIds: [1]
    },
    {
      step: "03",
      id: 3,
      title: "Instant AI & Workflow Automation",
      titleBn: "ইনস্ট্যান্ট AI ও স্বয়ংক্রিয় ওয়ার্কফ্লো",
      subtitle: "Inquiries are automatically captured, qualified, scheduled, and synced to CRM in under 60 seconds.",
      subtitleBn: "নতুন লিড আসার ৬০ সেকেন্ডের মধ্যে হোয়াটসঅ্যাপ ও ইমেইলে অটোমেটেড রেসপন্স ও ক্যালেন্ডার শিডিউলিং।",
      icon: Bot,
      metricTag: "< 60s Lead Response • WhatsApp CRM",
      gradient: "from-emerald-600 to-teal-500",
      accentBg: "bg-emerald-50/80 border-emerald-200",
      accentText: "text-emerald-700",
      solvesProblemIds: [2, 3, 4]
    }
  ];

  const runSimulation = () => {
    if (simulationRunning) return;
    setSimulationRunning(true);
    setSimulationStep(1);
    setTimeout(() => setSimulationStep(2), 1200);
    setTimeout(() => setSimulationStep(3), 2400);
    setTimeout(() => {
      setSimulationStep(4);
      setTimeout(() => {
        setSimulationRunning(false);
        setSimulationStep(0);
      }, 1600);
    }, 3600);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden" id="the-problem">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
            </span>
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>{isBDT ? 'মূল সমস্যা ও সমাধান' : 'THE CORE BOTTLENECK'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {isBDT ? 'আপনার বিজনেসের নতুন টুলের প্রয়োজন নেই।' : "Your Business Doesn't Need More Tools."} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
              {isBDT ? 'প্রয়োজন একটি সিঙ্ক্রোনাইজড সিস্টেম।' : 'It Needs One Better System.'}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {isBDT 
              ? 'ওয়েবসাইট, সোশ্যাল মিডিয়া, অ্যাডস ম্যানেজার আর আলাদা সফটওয়্যার একে অপরের সাথে কথা বলে না—যার ফলে সময় ও রেভিনিউ উভয়ই নষ্ট হয়।' 
              : "Many businesses have a website, social media pages, advertising accounts and different software — but they don't work together."}
          </p>

          {/* Interactive Hint Indicator */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>Hover any item below to see how our unified engine eliminates friction</span>
          </div>
        </motion.div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================= */}
          {/* LEFT: The Frustrated, Fragmented Reality                 */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-rose-50/70 via-white to-rose-50/40 border-2 border-rose-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-rose-100/40 relative overflow-hidden transition-all duration-300"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-red-500 to-rose-600" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-rose-200/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 shadow-xs">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <span>{isBDT ? 'ফ্র্যাগমেন্টেড ট্র্যাপ' : 'The Disconnected Trap'}</span>
                    </h3>
                    <p className="text-xs text-rose-700/80 font-medium mt-0.5">
                      {isBDT ? 'সফটওয়্যারগুলো যখন সাইলোতে কাজ করে' : 'What happens when software operates in silos'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                    HIGH FRICTION
                  </span>
                  <span className="text-[10px] font-mono text-rose-600/80">6 Core Leaks</span>
                </div>
              </div>

              {/* Friction Metric Meter */}
              <div className="mt-4 p-3 rounded-xl bg-rose-100/60 border border-rose-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span className="font-bold text-slate-800">Operational Drain:</span>
                </div>
                <span className="font-mono font-bold text-rose-700 bg-white px-2 py-0.5 rounded-md border border-rose-200 text-[11px]">
                  ~68% Lost Momentum
                </span>
              </div>

              {/* Problem List */}
              <div className="space-y-2 mt-4">
                {commonProblems.map((prob) => {
                  const isHovered = hoveredProblem === prob.id;
                  const isTargetedByActivePillar = activePillar !== null && (
                    enginePillars.find(p => p.id === activePillar)?.solvesProblemIds.includes(prob.id) ||
                    (activePillar === 0)
                  );

                  return (
                    <motion.div
                      key={prob.id}
                      onMouseEnter={() => setHoveredProblem(prob.id)}
                      onMouseLeave={() => setHoveredProblem(null)}
                      whileHover={{ scale: 1.01 }}
                      className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isHovered || isTargetedByActivePillar
                          ? 'bg-rose-100/90 border-rose-400 shadow-md ring-2 ring-rose-300/60'
                          : 'bg-white/80 border-rose-100 hover:bg-white hover:border-rose-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          <XCircle className={`w-4 h-4 transition-colors ${
                            isHovered || isTargetedByActivePillar ? 'text-rose-600 scale-110' : 'text-rose-500'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-slate-900 leading-tight">
                              {isBDT ? prob.titleBn : prob.title}
                            </h4>
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-50 text-rose-700 border border-rose-200 shrink-0">
                              {prob.impactBadge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {isBDT ? prob.descriptionBn : prob.description}
                          </p>

                          {/* Solved-by Link Cue */}
                          {(isHovered || isTargetedByActivePillar) && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-2 pt-2 border-t border-rose-200/80 flex items-center justify-between text-[11px] text-blue-700 font-bold"
                            >
                              <span className="flex items-center gap-1 font-mono">
                                <Zap className="w-3.5 h-3.5 text-blue-600" />
                                {prob.solvedByPillar === 0 
                                  ? 'Solved by Entire Engine Pipeline' 
                                  : `Solved by Engine Pillar 0${prob.solvedByPillar}`}
                              </span>
                              <span className="text-rose-600 font-mono text-[10px]">{prob.lossStat}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom summary */}
            <div className="mt-6 pt-4 border-t border-rose-200 flex items-center gap-2.5 text-xs text-rose-800 font-semibold bg-rose-100/50 p-3 rounded-xl">
              <Activity className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                {isBDT 
                  ? 'ফলশ্রুতি: অনিয়ন্ত্রিত অ্যাড খরচ, গ্রাহক হারানোর ঝুঁকি, টিমের ক্লান্তি ও ব্যবসায় স্থবিরতা।' 
                  : 'Result: High ad spend, lost inquiries, staff burnout, and flatline growth.'}
              </span>
            </div>
          </motion.div>


          {/* ========================================================= */}
          {/* RIGHT: The LeadNest IT Unified Solution                  */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60 border-2 border-blue-300/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-blue-500/10 relative overflow-hidden"
          >
            {/* Top animated accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 animate-pulse" />
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-blue-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                      <span>{isBDT ? 'লিডনেস্ট আইটি ইঞ্জিন' : 'The LeadNest IT Engine'}</span>
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold mt-0.5">
                      {isBDT ? 'একীভূত, স্বয়ংক্রিয় ডিজিটাল গ্রোথ পাইপলাইন' : 'One cohesive, automated digital growth pipeline'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-100 text-blue-800 border border-blue-300 flex items-center gap-1.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    UNIFIED SYSTEM
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold">100% Synced</span>
                </div>
              </div>

              {/* Real-time System Status Bar & Simulation Trigger */}
              <div className="mt-4 p-3 rounded-xl bg-blue-100/50 border border-blue-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-bold text-slate-800">
                    {simulationRunning ? 'Simulating Lead Journey...' : 'Pipeline Status: Active & Synced'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={simulationRunning}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-white text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200 transition-all shadow-2xs flex items-center gap-1 cursor-pointer disabled:opacity-50"
                  title="Test how a lead flows through this pipeline"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>{simulationRunning ? 'Simulating...' : 'Test Lead Flow'}</span>
                </button>
              </div>

              {/* Solution Pillars (Interactive & Animated) */}
              <div className="space-y-4 mt-5 relative">
                
                {/* Connecting animated energy trace between steps */}
                <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-sky-500 to-emerald-500 hidden sm:block pointer-events-none opacity-40" />

                {enginePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isPillarActive = activePillar === pillar.id;
                  const isHoveredByLeftProblem = hoveredProblem !== null && (
                    commonProblems[hoveredProblem]?.solvedByPillar === pillar.id ||
                    commonProblems[hoveredProblem]?.solvedByPillar === 0
                  );
                  const isSimulationActive = simulationStep === pillar.id;

                  return (
                    <motion.div
                      key={pillar.id}
                      onMouseEnter={() => setActivePillar(pillar.id)}
                      onMouseLeave={() => setActivePillar(null)}
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.2 }}
                      className={`p-4 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                        isPillarActive || isHoveredByLeftProblem || isSimulationActive
                          ? 'bg-white border-blue-500 shadow-lg ring-2 ring-blue-400/40'
                          : 'bg-white/90 border-blue-100 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      {/* Active Step Indicator Pulse */}
                      {(isPillarActive || isHoveredByLeftProblem || isSimulationActive) && (
                        <div className="absolute -top-1.5 right-4 px-2 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                          <Zap className="w-2.5 h-2.5 text-amber-300" />
                          <span>Pillar 0{pillar.step} Active</span>
                        </div>
                      )}

                      <div className="flex items-start gap-3.5">
                        {/* Number & Icon badge */}
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs border transition-all ${
                          isPillarActive || isHoveredByLeftProblem || isSimulationActive
                            ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white border-transparent scale-105'
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                              <span>{isBDT ? pillar.titleBn : pillar.title}</span>
                            </h4>
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[10px] font-bold shrink-0">
                              {pillar.metricTag}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {isBDT ? pillar.subtitleBn : pillar.subtitle}
                          </p>

                          {/* Interactive preview pills */}
                          <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500">
                            <span className="flex items-center gap-1 text-emerald-700 font-bold">
                              <Check className="w-3 h-3 text-emerald-600" />
                              Eliminates manual friction
                            </span>
                            <span className="text-slate-300">•</span>
                            <span>Full CRM Integration</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Simulation Completed Banner */}
                <AnimatePresence>
                  {simulationStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-3 rounded-xl bg-emerald-600 text-white flex items-center justify-between text-xs font-bold shadow-lg"
                    >
                      <span className="flex items-center gap-2 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        Journey Complete: Lead Captured, Qualified & Meeting Booked in 42s!
                      </span>
                      <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">100% Success</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Transition CTA */}
            <div className="mt-8 pt-6 border-t border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-xs font-mono text-blue-700 block font-bold tracking-wider uppercase">
                  {isBDT ? 'সিস্টেম আপগ্রেড শুরু করুন' : 'TRANSITION TO CLARITY'}
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {isBDT ? 'লিডনেস্ট আইটির সাথে আপনার বিজনেস সিস্টেম ঠিক করুন।' : "That's where LeadNest IT comes in."}
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/25 cursor-pointer group"
              >
                <span>{isBDT ? 'আমার বিজনেস সিস্টেম ফিক্স করুন' : 'Fix My Business System'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

