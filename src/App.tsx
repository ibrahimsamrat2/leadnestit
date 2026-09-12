import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CurrencyProvider, useCurrency } from './context/CurrencyContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { GrowthPillars } from './components/GrowthPillars';
import { ServicesSection } from './components/ServicesSection';
import { WebsiteGrowth } from './components/WebsiteGrowth';
import { MarketingSection } from './components/MarketingSection';
import { BusinessSystem } from './components/BusinessSystem';
import { AutomationSection } from './components/AutomationSection';
import { FoundersSection } from './components/FoundersSection';
import { PartnerProgram } from './components/PartnerProgram';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudies } from './components/CaseStudies';
import { WhyUs } from './components/WhyUs';
import { BlogSection } from './components/BlogSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { AdminDashboard } from './components/AdminDashboard';
import { BackToTop } from './components/BackToTop';
import { MobileQuickBar } from './components/MobileQuickBar';
import { GoFlyBackgroundDecor } from './components/GoFlyBackgroundDecor';
import { PageBanner } from './components/PageBanner';

type PageId = 'home' | 'solutions' | 'about' | 'process' | 'case-studies' | 'blog' | 'contact';

function MainApp() {
  const { currency } = useCurrency();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('Complete Digital Business Solution');

  // Sync with browser URL hash for direct links and back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'pricing') hash = 'blog';
      const validPages: PageId[] = ['home', 'solutions', 'about', 'process', 'case-studies', 'blog', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    let cleanId = pageId.replace('#', '').toLowerCase();
    if (cleanId === 'pricing') cleanId = 'blog';
    const validPages: PageId[] = ['home', 'solutions', 'about', 'process', 'case-studies', 'blog', 'contact'];
    const targetPage = validPages.includes(cleanId as PageId) ? (cleanId as PageId) : 'home';
    
    setCurrentPage(targetPage);
    window.location.hash = targetPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (service = 'Complete Digital Business Solution') => {
    setPreselectedService(service);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white pb-20 lg:pb-0 overflow-x-hidden relative">
      {/* 
        GoFly Travel Agency-Inspired Low Opacity Vector Graphics & Ambient Glows
        Subtle topographic waves, dotted paths, minimal nodes on pure white background
      */}
      <GoFlyBackgroundDecor />

      {/* Sticky Header Navigation with Active Page Tracking */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
      />

      {/* 
        Main Page Container with Simple Page-to-Page Animation Transitions:
        When clicking from home to solutions or any section, simple animation opens the direct new page!
      */}
      <main className="flex-grow relative z-10 pb-16 lg:pb-0 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {/* ================= PAGE 1: HOME ================= */}
          {currentPage === 'home' && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Hero with GoFly Service Search Card */}
              <Hero
                onOpenConsultation={handleOpenConsultation}
                onExploreSolutions={() => handleNavigate('solutions')}
              />

              {/* Trust Bar & Client Metrics */}
              <TrustBar />

              {/* Problem Section: Why Generic Agencies Fail */}
              <ProblemSection
                onOpenConsultation={() => handleOpenConsultation('Business Systems Alignment')}
              />

              {/* Core 3 Growth Pillars */}
              <GrowthPillars
                onSelectPillar={(pillar) => handleOpenConsultation(`${pillar} Engine Solutions`)}
              />

              {/* Testimonials */}
              <Testimonials />

              {/* Final Call to Action */}
              <FinalCTA
                onBookConsultation={() => handleOpenConsultation()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {/* ================= PAGE 2: SOLUTIONS ================= */}
          {currentPage === 'solutions' && (
            <motion.div
              key="page-solutions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              <PageBanner
                badge="Dual-Specialized Engineering"
                title="Services & Capabilities"
                subtitle="Full-Stack Web Architecture, AI Automation & Scalable Ad Funnels designed for exponential business scale."
                onBackToHome={() => handleNavigate('home')}
              />

              {/* All Solutions & Services */}
              <ServicesSection
                onSelectService={(serviceTitle) => handleOpenConsultation(serviceTitle)}
              />

              {/* Web Development Deep Dive */}
              <WebsiteGrowth
                onBuildWebsite={() => handleOpenConsultation('Website Development')}
              />

              {/* AI Automation & CRM Deep Dive */}
              <AutomationSection
                onExploreAutomation={() => handleOpenConsultation('AI Automation')}
              />

              {/* Performance Marketing & Ads Deep Dive */}
              <MarketingSection
                onGrowBusiness={() => handleOpenConsultation('Digital Marketing & Funnel')}
              />

              {/* Unified Growth Operating System */}
              <BusinessSystem />

              <FinalCTA
                onBookConsultation={() => handleOpenConsultation()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {/* ================= PAGE 3: FOUNDERS & TEAM (ABOUT) ================= */}
          {currentPage === 'about' && (
            <motion.div
              key="page-about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Founders Section - starts directly from "Founded by Two Specialists" */}
              <FoundersSection
                onOpenConsultation={() => handleOpenConsultation('Founder Direct Strategy Session')}
              />

              {/* Why Us Comparison Table */}
              <WhyUs />

              {/* Long-Term Partner Program */}
              <PartnerProgram
                onBecomePartner={() => handleOpenConsultation('Growth Partner Retainer')}
              />

              <FinalCTA
                onBookConsultation={() => handleOpenConsultation()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {/* ================= PAGE 4: PROCESS ================= */}
          {currentPage === 'process' && (
            <motion.div
              key="page-process"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              <PageBanner
                badge="Predictable Delivery"
                title="Our 5-Step Execution Cycle"
                subtitle="From strategic blueprinting to production sprint and revenue launch. Transparent timelines, weekly demos, zero guesswork."
                onBackToHome={() => handleNavigate('home')}
              />

              {/* Process Section */}
              <ProcessSection
                onStartProcess={() => handleNavigate('contact')}
              />

              <FinalCTA
                onBookConsultation={() => handleOpenConsultation()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {/* ================= PAGE 5: CASE STUDIES ================= */}
          {currentPage === 'case-studies' && (
            <motion.div
              key="page-case-studies"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              <PageBanner
                badge="Verified Case Metrics"
                title="Case Studies & Real Client Results"
                subtitle="Explore revenue growth metrics, conversion rate lifts, and technical architecture breakdowns across real-world deployments."
                onBackToHome={() => handleNavigate('home')}
              />

              {/* Case Studies */}
              <CaseStudies
                onConsultCaseStudy={(industry) => handleOpenConsultation(`Case Study Inquiry (${industry})`)}
              />

              {/* Testimonials */}
              <Testimonials />

              <FinalCTA
                onBookConsultation={() => handleOpenConsultation()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {/* ================= PAGE 6: BLOG & PLAYBOOKS ================= */}
          {currentPage === 'blog' && (
            <motion.div
              key="page-blog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              <PageBanner
                badge="Founder Intelligence"
                title="Engineering & Growth Playbooks"
                subtitle="Field-tested frameworks on headless web architecture, high-intent ad funnels, and autonomous AI CRM workflows."
                onBackToHome={() => handleNavigate('home')}
              />

              {/* Blog & Playbooks Section */}
              <BlogSection
                onOpenConsultation={(topic) => handleOpenConsultation(topic || 'Blog Strategy Session')}
              />

              {/* Frequently Asked Questions */}
              <FAQSection
                onAskQuestion={() => handleNavigate('contact')}
              />

              <FinalCTA
                onBookConsultation={() => handleOpenConsultation()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {/* ================= PAGE 7: CONTACT ================= */}
          {currentPage === 'contact' && (
            <motion.div
              key="page-contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="w-full"
            >
              <PageBanner
                badge={currency === 'USD' ? 'Direct Communication' : 'সরাসরি যোগাযোগ'}
                title={currency === 'USD' ? 'Connect with LeadNest IT' : 'LeadNest IT-র সাথে যোগাযোগ করুন'}
                subtitle={
                  currency === 'USD'
                    ? 'Schedule a free 30-minute growth architecture session, message on WhatsApp, or send your project specifications directly to our engineering team.'
                    : 'আমাদের ইঞ্জিনিয়ারিং টিমের সাথে ফ্রি ৩০ মিনিটের গ্রোথ স্ট্র্যাটেজি সেশন বুক করুন, হোয়াটসঅ্যাপে মেসেজ দিন বা প্রজেক্ট ব্রিফ পাঠান।'
                }
                onBackToHome={() => handleNavigate('home')}
              />

              {/* Contact Section with Booking Form & Direct Details */}
              <ContactSection
                initialService={preselectedService}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER with Page Navigation */}
      <Footer
        onNavClick={handleNavigate}
        onOpenAdminDashboard={() => setIsAdminDashboardOpen(true)}
        onOpenConsultation={() => handleOpenConsultation('Footer Direct Strategy Session')}
      />

      {/* MODALS */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedService={preselectedService}
      />

      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
        onNewConsultation={() => handleOpenConsultation()}
      />

      {/* Admin Panel & Founders Command Center */}
      <AdminDashboard
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
        onOpenConsultationModal={() => handleOpenConsultation()}
      />

      {/* Mobile Floating Quick Action Bar */}
      <MobileQuickBar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <MainApp />
      </CurrencyProvider>
    </ThemeProvider>
  );
}
