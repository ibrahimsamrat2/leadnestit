import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
  Lock,
  ArrowRight,
  Sparkles,
  Check,
  Copy,
  ShieldCheck,
  Flame,
  Globe,
  CreditCard
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { LanguageRegionSelector } from './LanguageRegionSelector';
import {
  VisaLogo,
  MastercardLogo,
  AmexLogo,
  StripeLogo,
  ApplePayLogo,
  GooglePayLogo,
  PaypalLogo,
  BkashLogo,
  NagadLogo,
  BankTransferBadge
} from './PaymentLogos';

interface FooterProps {
  onNavClick: (href: string) => void;
  onOpenAdminDashboard?: () => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenAdminDashboard,
  onOpenConsultation
}) => {
  const { currency, setCurrency } = useCurrency();
  const isUSD = currency === 'USD';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('coo.masconsultancy@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 overflow-hidden" id="footer">
      {/* Ambient background glow and grid */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            TOP PROFESSIONAL CTA BANNER
           ========================================================= */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-700 to-slate-950 p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-white/10 relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-mono font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isUSD ? 'Q2 SPRINT INTAKE • 2 CLIENT SPOTS OPEN' : 'চলতি মাসের ইনটেক • মাত্র ২টি স্লট খালি'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                {isUSD ? (
                  <>Ready to build a predictable, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">scalable growth engine?</span></>
                ) : (
                  <>আপনার ব্যবসাকে অটোমেট ও <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">প্রফিটেবল করতে প্রস্তুত?</span></>
                )}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-xl font-normal">
                {isUSD
                  ? 'Skip the agency bureaucracy. Get production-grade web architecture and high-ROAS paid acquisition tailored directly to your revenue targets.'
                  : 'কোনো জুনিয়র ইন্টার্ন বা আউটসোর্স নয়। সরাসরি আন্তর্জাতিক মানের আর্কিটেকচার ও পারফরম্যান্স মার্কেটিংয়ের মাধ্যমে আপনার বিজনেসকে স্কেল করুন।'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-102 active:scale-98 cursor-pointer"
                  id="footer-teaser-cta"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>{isUSD ? 'Book Free Strategy Call' : 'ফ্রি স্ট্র্যাটেজি সেশন বুক করুন'}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              )}
              <a
                href="https://wa.me/8801722604376?text=Hello%20LeadNest%20IT%2C%20I%20want%20to%20discuss%20a%20new%20growth%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            MAIN FOOTER GRID (4 COLUMNS)
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Currency Switcher (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="md" />
            </div>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-800/80 text-[11px] font-mono font-bold text-blue-400 tracking-wider">
              <Flame className="w-3.5 h-3.5 text-blue-400" />
              <span>BUILD • GROW • AUTOMATE</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              {isUSD
                ? 'LeadNest IT is a premier digital engineering and growth architecture firm. We engineer high-converting web applications, predictable acquisition funnels, and intelligent operations for scaling global enterprises.'
                : 'LeadNest IT একটি শীর্ষস্থানীয় ডিজিটাল ইঞ্জিনিয়ারিং ও গ্রোথ আর্কিটেকচার ফার্ম। আমরা বিশ্বমানের ওয়েব অ্যাপ্লিকেশন, হাই-কনভার্টিং মার্কেটিং ফানেল এবং ইন্টেলিজেন্ট অটোমেশন সল্যুশন তৈরি করি।'}
            </p>

            {/* Country & Language Quick Switcher */}
            <div className="pt-2">
              <LanguageRegionSelector
                variant="inline"
                label={isUSD ? 'REGION & LANGUAGE:' : 'দেশ ও ভাষা:'}
              />
            </div>

            {/* Social Connect */}
            <div className="pt-2">
              <span className="text-[11px] font-mono font-bold text-slate-500 block mb-2 uppercase tracking-wider">
                CONNECT WITH LEADNEST IT
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-0.5 transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 hover:-translate-y-0.5 transition-all shadow-xs"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-0.5 transition-all shadow-xs"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/8801722604376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 hover:-translate-y-0.5 transition-all shadow-xs"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Company Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>COMPANY</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: isUSD ? 'About LeadNest IT' : 'আমাদের পরিচিতি', href: '#about' },
                { name: isUSD ? 'Our 4-Step Process' : 'আমাদের ৪-ধাপের প্রসেস', href: '#process' },
                { name: isUSD ? 'Case Studies & Results' : 'সফল কেস স্টাডিজ', href: '#case-studies' },
                { name: isUSD ? 'Blog & Playbooks' : 'ব্লগ ও প্লে-বুক', href: '#blog' },
                { name: isUSD ? 'Contact & Inquiry' : 'যোগাযোগ ও ইনকোয়ারি', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavClick(item.href)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 group-hover:w-2 transition-all" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions & Growth Engines (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>GROWTH ENGINES</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: 'Website & Web Architecture', badge: 'Next/React', href: '#solutions' },
                { name: 'Performance Meta & Google Ads', badge: 'High-ROAS', href: '#solutions' },
                { name: 'B2B & B2C Lead Generation', badge: 'Funnels', href: '#solutions' },
                { name: '24/7 AI Customer Support & Chat', badge: 'AI', href: '#solutions' },
                { name: 'Lead Qualification & CRM Sync', badge: 'Automation', href: '#solutions' },
                { name: 'Appointment & Calendar Booking', badge: 'Zero-Friction', href: '#solutions' },
              ].map((sol, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavClick(sol.href)}
                    className="group flex items-center justify-between w-full text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{sol.name}</span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-blue-300 bg-slate-800 group-hover:bg-blue-900/50 px-1.5 py-0.5 rounded border border-slate-700 transition-colors shrink-0">
                      {sol.badge}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dual Global Hubs & Accepted Payment Gateways (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>GLOBAL HUBS & HOTLINES</span>
            </h4>

            <div className="space-y-2.5 text-xs">
              {/* USA Hub Card */}
              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/60 transition-all">
                <div className="flex items-center justify-between text-slate-200 font-bold text-[11px] mb-1">
                  <span className="flex items-center gap-1.5">
                    <span>🇺🇸</span>
                    <span>United States Hub</span>
                  </span>
                  <span className="text-[10px] font-mono text-blue-300 bg-blue-950/80 border border-blue-800/80 px-1.5 py-0.5 rounded font-bold">
                    EST Support
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Phone className="w-3 h-3 text-blue-400 shrink-0" />
                  <span>+1 (800) 492-NEST</span>
                </div>
              </div>

              {/* Bangladesh Hub Card */}
              <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/60 transition-all">
                <div className="flex items-center justify-between text-slate-200 font-bold text-[11px] mb-1">
                  <span className="flex items-center gap-1.5">
                    <span>🇧🇩</span>
                    <span>Bangladesh Hub (Dhaka)</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-1.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Global HQ</span>
                  </span>
                </div>
                <a
                  href="https://wa.me/8801722604376?text=Hi%20LeadNest%20IT%2C%20I%20am%20interested%20in%20a%20strategy%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-semibold transition-colors text-[11px]"
                >
                  <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>+880 1722-604376 (WhatsApp & Call)</span>
                </a>
              </div>

              {/* Direct Email with Copy Feedback */}
              <div className="pt-1 space-y-2">
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-800 border border-slate-700 text-[11px]">
                  <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis">
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <a
                      href="mailto:coo.masconsultancy@gmail.com"
                      className="text-slate-300 hover:text-blue-300 font-semibold truncate transition-colors"
                      title="Send email"
                    >
                      coo.masconsultancy@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors shrink-0 shadow-xs cursor-pointer"
                    title="Copy Email"
                    id="footer-copy-email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {copiedEmail && (
                  <p className="text-[10px] text-emerald-400 font-mono font-bold animate-fade-in pl-1">
                    ✓ Email address copied to clipboard!
                  </p>
                )}
              </div>
            </div>

            {/* ACCEPTED PAYMENT GATEWAYS WITH CRISP OFFICIAL LOGOS */}
            <div className="pt-3">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                  <span>{isUSD ? 'ACCEPTED PAYMENT GATEWAYS' : 'গৃহীত পেমেন্ট গেটওয়ে'}</span>
                </span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-1.5 py-0.2 rounded">
                  256-Bit SSL
                </span>
              </div>

              {/* Verified Payment Gateway Logo Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {isUSD ? (
                  <>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Stripe Verified">
                      <StripeLogo className="h-4.5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Visa Verified">
                      <VisaLogo className="h-4.5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Mastercard Identity Check">
                      <MastercardLogo className="h-5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="American Express">
                      <AmexLogo className="h-5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Apple Pay">
                      <ApplePayLogo className="h-5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Google Pay">
                      <GooglePayLogo className="h-4.5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="PayPal Verified">
                      <PaypalLogo className="h-4.5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-1.5 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Wire / SWIFT Transfer">
                      <BankTransferBadge className="h-full w-auto" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-emerald-400 hover:shadow-sm transition-all" title="bKash Merchant Payment">
                      <BkashLogo className="h-5.5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-orange-400 hover:shadow-sm transition-all" title="Nagad Payment">
                      <NagadLogo className="h-5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Visa">
                      <VisaLogo className="h-4.5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Mastercard">
                      <MastercardLogo className="h-5 w-auto max-w-full" />
                    </div>
                    <div className="h-9 rounded-lg bg-white border border-slate-200/80 px-2 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Stripe">
                      <StripeLogo className="h-4.5 w-auto max-w-full" />
                    </div>
                    <div className="col-span-3 sm:col-span-1 h-9 rounded-lg bg-white border border-slate-200/80 px-1.5 py-1 flex items-center justify-center shadow-xs hover:border-blue-400 hover:shadow-sm transition-all" title="Bank Transfer / NPSB">
                      <BankTransferBadge className="h-full w-auto" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT, COMPLIANCE & STATUS BAR
           ========================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-slate-300 font-semibold">© {new Date().getFullYear()} LeadNest IT. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="text-[11px] text-slate-400">
              Enterprise Web Architecture • Revenue Growth Operations
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-mono">
            {/* Security / Compliance Badge */}
            <div className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>PCI-DSS Level 1 Secure</span>
            </div>

            {/* Live Infrastructure Heartbeat */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>99.9% Uptime Monitored</span>
            </div>

            {/* Founder / Admin Panel Secure Trigger */}
            {onOpenAdminDashboard && (
              <button
                onClick={onOpenAdminDashboard}
                className="text-slate-300 hover:text-white font-mono text-[11px] font-bold transition-all flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg border border-slate-700 shadow-xs cursor-pointer active:scale-98"
                title="Founders & Admin Console"
                id="footer-admin-panel-btn"
              >
                <Lock className="w-3 h-3 text-blue-400" />
                <span>Admin Console</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
