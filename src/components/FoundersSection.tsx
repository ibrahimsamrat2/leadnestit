import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  TrendingUp,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Mail,
  Copy,
  Check,
  Camera,
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface FoundersSectionProps {
  onOpenConsultation: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenConsultation }) => {
  const { currency } = useCurrency();
  const isUSD = currency === 'USD';

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Photo states for Ibrahim Samrat
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('leadnest_ibrahim_photo') || '';
  });
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Photo states for Amit Hasan
  const [amitPhotoUrl, setAmitPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('leadnest_amit_photo') || '';
  });
  const [amitImageError, setAmitImageError] = useState(false);
  const fileInputRefAmit = useRef<HTMLInputElement>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setImageError(false);
          try {
            localStorage.setItem('leadnest_ibrahim_photo', result);
          } catch (err) {
            console.warn('Could not cache photo to local storage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAmitPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setAmitPhotoUrl(result);
          setAmitImageError(false);
          try {
            localStorage.setItem('leadnest_amit_photo', result);
          } catch (err) {
            console.warn('Could not cache Amit photo to local storage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const ibrahimWhatsAppUrl = `https://wa.me/8801722604376?text=${encodeURIComponent(
    isUSD
      ? 'Hi Ibrahim Samrat, I saw your profile on LeadNest IT and would like to discuss our product design and digital growth.'
      : 'আসসালামু আলাইকুম ইব্রাহিম সম্রাট ভাই, LeadNest IT থেকে আপনার সাথে প্রজেক্ট ডিজাইন ও ডিজিটাল বিজনেস গ্রোথ নিয়ে সরাসরি কথা বলতে চাচ্ছি।'
  )}`;

  const amitWhatsAppUrl = `https://wa.me/8801722604376?text=${encodeURIComponent(
    isUSD
      ? 'Hi Amit Hasan, I saw your profile on LeadNest IT and would like to discuss growth marketing, ads, and scaling funnels.'
      : 'আসসালামু আলাইকুম অমিত হাসান ভাই, LeadNest IT থেকে আপনার সাথে পারফরম্যান্স মার্কেটিং ও সেলস ফানেল নিয়ে সরাসরি কথা বলতে চাচ্ছি।'
  )}`;

  const bothFoundersWhatsAppUrl = `https://wa.me/8801722604376?text=${encodeURIComponent(
    isUSD
      ? 'Hi Ibrahim Samrat & Amit Hasan, I would like to schedule a strategy session with the LeadNest IT founders.'
      : 'আসসালামু আলাইকুম ইব্রাহিম সম্রাট ও অমিত হাসান ভাই, LeadNest IT থেকে আপনাদের সাথে সরাসরি স্ট্র্যাটেজি সেশনে কথা বলতে চাই।'
  )}`;

  return (
    <section className="pt-28 sm:pt-32 pb-20 sm:pb-24 bg-white relative overflow-hidden" id="about">
      {/* Hidden file inputs for updating photos */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
        aria-label="Upload photo for Ibrahim Samrat"
      />
      <input
        type="file"
        ref={fileInputRefAmit}
        onChange={handleAmitPhotoUpload}
        accept="image/*"
        className="hidden"
        aria-label="Upload photo for Amit Hasan"
      />

      {/* Dynamic Background Motion Lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-6 w-96 h-96 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================
            SECTION HEADER - LEFT-ALIGNED WITH MOTION GRAPHICS ACCENTS
           ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14 text-left">
          <div className="max-w-3xl text-left space-y-3.5">
            {/* Left-Aligned Badge with Animated Glow Pulse */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{isUSD ? 'CO-FOUNDERS & DIRECT LEADERSHIP' : 'কো-ফাউন্ডার ও কোর লিডারশিপ'}</span>
            </motion.div>

            {/* Left-Aligned Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              {isUSD ? (
                <>
                  Founded by Two Specialists. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                    Driven by Real-World Execution.
                  </span>
                </>
              ) : (
                <>
                  দুই কো-ফাউন্ডারের যৌথ শক্তি। <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                    বাস্তব কাজের পরীক্ষিত দক্ষতা।
                  </span>
                </>
              )}
            </motion.h2>

            {/* Left-Aligned Crisp Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              {isUSD
                ? 'Founder-led strategy. Specialist execution. Direct accountability. LeadNest IT unites 7+ years of elite UI/UX craftsmanship with 3+ years of data-driven performance marketing—no middlemen, zero juniors.'
                : 'ফাউন্ডারদের সরাসরি স্ট্র্যাটেজি ও শতভাগ দায়বদ্ধতা। LeadNest IT পরিচালিত হচ্ছে ইব্রাহিম সম্রাট এবং অমিত হাসানের যৌথ নেতৃত্বে—যেখানে ৭+ বছরের ডিজাইন আর্কিটেকচার ও ৩+ বছরের হাই-কনভার্টিং পেইড মার্কেটিং একসাথে কাজ করে।'}
            </motion.p>
          </div>

          {/* Right Side: High-Tech Founder SLA Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 self-start lg:self-end"
          >
            <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 self-start lg:self-end">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center gap-3 shadow-2xs hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-blue-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block font-mono">100% DIRECT OVERSIGHT</span>
                  <span className="text-[11px] text-slate-500 block">Every client touches founders</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3 shadow-2xs hover:border-emerald-300 hover:bg-emerald-100/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Zap className="w-4 h-4 text-emerald-600 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-black text-emerald-950 block font-mono">DUAL DISCIPLINE SYNERGY</span>
                  <span className="text-[11px] text-emerald-700 block">UI/UX Architecture + CRO Ads</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            THE TWO FOUNDER CARDS - SHORTER, SIMPLE, ULTRA-UNIQUE & COMPACT
           ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
          
          {/* ================= FOUNDER 1: IBRAHIM SAMRAT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl bg-white border-2 border-blue-200/90 hover:border-blue-400 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 overflow-hidden"
            id="founder-card-ibrahim"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Shimmer sweep effect on card hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="relative z-10">
              {/* Header: Roles & Experience Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <Palette className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isUSD ? 'Product Design & UX' : 'প্রোডাক্ট ডিজাইন ও UX'}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-blue-800 font-mono text-[11px] font-bold">
                  {isUSD ? '7+ Yrs Exp' : '৭+ বছরের অভিজ্ঞতা'}
                </span>
              </div>

              {/* Profile Bar: Avatar + Name + Title */}
              <div className="flex items-center gap-4 mb-5">
                {/* Photo with Animated Gradient Halo Ring */}
                <div className="relative group/avatar shrink-0">
                  {/* Continuous Rotating Glow Aura */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 opacity-70 blur-[3px] group-hover/avatar:opacity-100 transition-opacity"
                  />

                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100 relative flex items-center justify-center z-10">
                    {photoUrl && !imageError ? (
                      <img
                        src={photoUrl}
                        alt="Ibrahim Samrat - Co-Founder"
                        onError={() => setImageError(true)}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover/avatar:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-sky-50 flex flex-col items-center justify-center text-center p-2">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-bold mb-0.5">
                          IS
                        </div>
                        <span className="text-[10px] font-mono text-blue-700 font-bold">Ibrahim S.</span>
                      </div>
                    )}
                  </div>

                  {/* Verified Indicator Dot */}
                  <div
                    className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-white border border-emerald-500 text-[9px] font-mono font-bold text-emerald-700 flex items-center gap-1 shadow-2xs z-20"
                    title="Verified Co-Founder"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active</span>
                  </div>

                  {/* Upload Photo Overlay on Hover */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 z-20 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover/avatar:opacity-100 transition-opacity rounded-2xl flex flex-col items-center justify-center text-white text-[10px] font-semibold gap-0.5 cursor-pointer"
                    title="Update Profile Photo"
                  >
                    <Camera className="w-4 h-4 text-cyan-300" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                      Ibrahim Samrat
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[10px] font-mono font-bold text-blue-700">
                      Co-Founder
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    Lead Design Architect
                  </p>
                  <p className="text-xs text-blue-700 font-medium mt-1 truncate">
                    Enterprise Design Systems & CRO Layouts
                  </p>
                </div>
              </div>

              {/* Short & Punchy Design Philosophy Quote */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 leading-relaxed font-normal mb-5 group-hover:bg-blue-50/90 transition-colors">
                <span className="font-bold text-blue-900 block mb-1">Core Execution Standard:</span>
                "{isUSD
                  ? 'A website is your 24/7 revenue engine. We engineer every interface with conversion psychology so visitors instantly trust you with their capital.'
                  : 'ওয়েবসাইট শুধুমাত্র সুন্দর দৃশ্য নয়, এটি আপনার ২৪/৭ রেভিনিউ ইঞ্জিন। ভিজিটর যেন ৩ সেকেন্ডেই আস্থা নিয়ে অর্ডারে কনভার্ট হয়, সেটিই আমাদের লক্ষ্য।'}"
              </div>

              {/* Compact Motion Superpower Chips */}
              <div className="mb-5">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>Execution Superpowers:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'High-Converting UI/UX',
                    'Enterprise Design Systems',
                    'Conversion Psychology',
                    'Brand Visual Prestige'
                  ].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.07, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 border border-slate-200 hover:border-blue-200 transition-all cursor-default shadow-2xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct 1-Click Contact Footer Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 relative z-10">
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => copyToClipboard('+8801722604376', 'ibrahim_phone')}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  title="Copy Phone/WhatsApp"
                >
                  {copiedKey === 'ibrahim_phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                      <span>+880 1722-604376</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  href="mailto:coo.masconsultancy@gmail.com?subject=Design%20Inquiry%20-%20LeadNest%20IT"
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors cursor-pointer"
                  title="Email Ibrahim Samrat"
                >
                  <Mail className="w-3.5 h-3.5" />
                </motion.a>
              </div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={ibrahimWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* ================= FOUNDER 2: AMIT HASAN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl bg-white border-2 border-emerald-200/90 hover:border-emerald-400 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-300 overflow-hidden"
            id="founder-card-amit"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Shimmer sweep effect on card hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="relative z-10">
              {/* Header: Roles & Experience Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isUSD ? 'Growth Marketing & CRO' : 'গ্রোথ মার্কেটিং ও CRO'}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-emerald-800 font-mono text-[11px] font-bold">
                  {isUSD ? '3+ Yrs Exp' : '৩+ বছরের অভিজ্ঞতা'}
                </span>
              </div>

              {/* Profile Bar: Avatar + Name + Title */}
              <div className="flex items-center gap-4 mb-5">
                {/* Photo with Animated Gradient Halo Ring */}
                <div className="relative group/avatar shrink-0">
                  {/* Continuous Rotating Glow Aura */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-70 blur-[3px] group-hover/avatar:opacity-100 transition-opacity"
                  />

                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-emerald-50 relative flex items-center justify-center z-10">
                    {amitPhotoUrl && !amitImageError ? (
                      <img
                        src={amitPhotoUrl}
                        alt="Amit Hasan - Co-Founder"
                        onError={() => setAmitImageError(true)}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover/avatar:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-50 flex flex-col items-center justify-center text-center p-2">
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-base font-bold mb-0.5 font-mono">
                          AH
                        </div>
                        <span className="text-[10px] font-mono text-emerald-800 font-bold">Amit Hasan</span>
                      </div>
                    )}
                  </div>

                  {/* Verified Indicator Dot */}
                  <div
                    className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-white border border-emerald-500 text-[9px] font-mono font-bold text-emerald-700 flex items-center gap-1 shadow-2xs z-20"
                    title="Verified Co-Founder"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active</span>
                  </div>

                  {/* Upload Photo Overlay on Hover */}
                  <button
                    onClick={() => fileInputRefAmit.current?.click()}
                    className="absolute inset-0 z-20 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover/avatar:opacity-100 transition-opacity rounded-2xl flex flex-col items-center justify-center text-white text-[10px] font-semibold gap-0.5 cursor-pointer"
                    title="Update Profile Photo"
                  >
                    <Camera className="w-4 h-4 text-emerald-300" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight group-hover:text-emerald-600 transition-colors">
                      Amit Hasan
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-800">
                      Co-Founder
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    Growth & Performance Lead
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-1 truncate">
                    Algorithmic Media Buying & Paid Funnels
                  </p>
                </div>
              </div>

              {/* Short & Punchy Marketing Philosophy Quote */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-slate-700 leading-relaxed font-normal mb-5 group-hover:bg-emerald-50/90 transition-colors">
                <span className="font-bold text-emerald-950 block mb-1">Core Execution Standard:</span>
                "{isUSD
                  ? 'Traffic without a high-converting system burns capital. Every ad dollar is backed by rigorous A/B funnels so revenue compounds predictably.'
                  : 'সঠিক ফানেল ছাড়া ট্রাফিক আনা মানে অপচয়। আমরা বিজ্ঞাপনের প্রতিটি পয়সা থেকে সর্বোচ্চ আরওআই (ROI) এবং স্থায়ী গ্রাহক নিশ্চিত করি।'}"
              </div>

              {/* Compact Motion Superpower Chips */}
              <div className="mb-5">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>Execution Superpowers:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Paid Media (Meta & Google)',
                    'Multi-Stage Inbound Funnels',
                    'Full-Funnel CRO Testing',
                    'Automated Lead Scoring'
                  ].map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.07, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-200 transition-all cursor-default shadow-2xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct 1-Click Contact Footer Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 relative z-10">
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenConsultation}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Audit Campaign</span>
                </motion.button>
              </div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={amitWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            COMPACT SYNERGY CALLOUT - MOTION GRAPHICS BANNER
           ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          {/* Ambient Animated Floating Orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-1/4 w-80 h-32 bg-blue-500/25 rounded-full blur-[80px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 left-1/4 w-80 h-32 bg-emerald-500/25 rounded-full blur-[80px] pointer-events-none"
          />

          <div className="space-y-1.5 relative z-10 max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <Zap className="w-4 h-4 text-amber-400" />
              <span>THE 50/50 FOUNDER ADVANTAGE</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Design without marketing fails. Marketing without design bleeds.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              With both specialists leading your project, you get world-class aesthetic credibility backed by rigorous, revenue-focused acquisition.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 relative z-10 shrink-0">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={bothFoundersWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Founders</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenConsultation}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
