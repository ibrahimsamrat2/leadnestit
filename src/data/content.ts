import { CaseStudyItem, FAQItem, PricingPlan, ServiceItem } from '../types';

export const PILLARS_DATA = [
  {
    id: 'build',
    tag: 'PILLAR 01',
    name: 'BUILD',
    headline: 'Create a powerful digital foundation.',
    description: 'We engineer high-performance web platforms, eCommerce systems, and scalable brand architectures built specifically to convert cold visitors into high-intent buyers.',
    services: [
      'Website Development',
      'eCommerce Development',
      'High-Converting Landing Pages',
      'Branding & Visual Identity',
      'UI/UX Architecture',
      'Custom Business Systems'
    ],
    ctaText: 'Build With Us',
    accentColor: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'grow',
    tag: 'PILLAR 02',
    name: 'GROW',
    headline: 'Turn attention into customers and customers into revenue.',
    description: 'Stop burning cash on clicks that do not convert. We deploy multi-channel acquisition funnels, targeted search, and algorithmic ad strategies that fuel sustainable growth.',
    services: [
      'Performance Marketing & Strategy',
      'Meta (Facebook & Instagram) Ads',
      'Google Ads & Intent Search',
      'Technical & Strategic SEO',
      'B2B & B2C Lead Generation',
      'Conversion Rate Optimization (CRO)'
    ],
    ctaText: 'Grow With Us',
    accentColor: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/30'
  },
  {
    id: 'automate',
    tag: 'PILLAR 03',
    name: 'AUTOMATE',
    headline: 'Use AI and automation to reduce repetitive work and scale efficiently.',
    description: 'Replace manual data entry, slow lead response times, and repetitive customer support with intelligent 24/7 AI agents and frictionless workflow pipelines.',
    services: [
      'AI Customer Support',
      'Lead Qualification',
      'Appointment Automation',
      'CRM Integration',
      'WhatsApp/Email Automation',
      'Human Handoff'
    ],
    ctaText: 'Automate With Us',
    accentColor: 'from-blue-500 to-indigo-600',
    borderColor: 'border-indigo-500/30'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDescription: 'High-speed, conversion-focused corporate websites built with modern web architecture.',
    fullDescription: 'Custom, blazing-fast web platforms engineered with Next/React, responsive across every device, and optimized for high conversion rates.',
    iconName: 'Code2',
    pillar: 'BUILD',
    highlights: ['Sub-second load times', 'SEO-first markup', 'Conversion architecture']
  },
  {
    id: 'ecommerce',
    title: 'eCommerce Development',
    shortDescription: 'Frictionless digital storefronts designed to maximize average order value and checkout speed.',
    fullDescription: 'Scalable Shopify and custom headless commerce systems featuring seamless gateways, inventory synchronicity, and one-click buying.',
    iconName: 'ShoppingBag',
    pillar: 'BUILD',
    highlights: ['One-click checkouts', 'Inventory sync', 'Payment gateway hardening']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Targeted multi-channel ad campaigns that attract qualified prospects ready to transact.',
    fullDescription: 'Data-driven paid media execution across Meta, Google, and LinkedIn with continuous testing and algorithmic audience modeling.',
    iconName: 'Megaphone',
    pillar: 'GROW',
    highlights: ['Multi-channel ad funnels', 'Audience segmentation', 'Real-time ROAS tracking']
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Predictable outbound and inbound pipelines that feed your sales team qualified appointments.',
    fullDescription: 'Structured lead magnets, dedicated opt-in funnels, and automated qualification questionnaires that filter for high-value clients.',
    iconName: 'Target',
    pillar: 'GROW',
    highlights: ['Pre-qualified prospect lists', 'Lead scoring logic', 'Automated calendar booking']
  },
  {
    id: 'branding-creative',
    title: 'Branding & Creative',
    shortDescription: 'Cohesive visual identity systems that position your company as the obvious market leader.',
    fullDescription: 'Logo design, typography guidelines, vector graphics, and digital brand books that command premium pricing and instant trust.',
    iconName: 'Palette',
    pillar: 'BUILD',
    highlights: ['Visual identity system', 'Typography & color scales', 'Brand collateral kits']
  },
  {
    id: 'seo-optimization',
    title: 'SEO',
    shortDescription: 'Technical and content SEO strategies to capture intent-driven organic search traffic.',
    fullDescription: 'Comprehensive on-page, off-page, schema markup, and site velocity engineering that secures top rankings on high-intent buyer keywords.',
    iconName: 'Search',
    pillar: 'GROW',
    highlights: ['High-intent keyword targeting', 'Technical audit & fix', 'Schema & indexing']
  },
  {
    id: 'sales-funnel',
    title: 'Sales Funnel',
    shortDescription: 'Strategically engineered conversion pathways that turn curious visitors into loyal buyers.',
    fullDescription: 'Step-by-step visitor journeys incorporating psychological hooks, social proof elements, upsell sequences, and objection-killing flows.',
    iconName: 'Filter',
    pillar: 'GROW',
    highlights: ['Friction-free opt-in gates', 'Upsell & order bumps', 'Behavioral remarketing']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortDescription: 'Intelligent AI agents that qualify leads, answer inquiries, and eliminate repetitive tasks.',
    fullDescription: 'Trained large-language model assistants that handle customer conversations, schedule demos, draft responses, and extract prospect insights.',
    iconName: 'Bot',
    pillar: 'AUTOMATE',
    highlights: ['Natural language Q&A', 'Context-aware lead capture', 'Zero-latency reply times']
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    shortDescription: 'End-to-end workflow connections between your website, CRM, email, and internal tools.',
    fullDescription: 'Automate repetitive back-office tasks, webhook pipelines, customer onboarding, invoice generation, and WhatsApp notifications.',
    iconName: 'Workflow',
    pillar: 'AUTOMATE',
    highlights: ['Zero human data re-entry', 'Multi-app webhooks', 'Automated document creation']
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    shortDescription: 'Continuous technical maintenance, security monitoring, and strategic growth consultation.',
    fullDescription: 'Dedicated engineering hours, weekly health checks, speed monitoring, and quarterly growth audits so your digital engine never slows down.',
    iconName: 'ShieldCheck',
    pillar: 'SUPPORT',
    highlights: ['24/7 uptime monitoring', 'Continuous security patching', 'Dedicated account strategist']
  }
];

export const MARKETING_FUNNEL_STEPS = [
  { step: '01', title: 'AWARENESS', desc: 'Targeted ads, organic search, and brand touchpoints introduce your solution to qualified prospects.' },
  { step: '02', title: 'ENGAGEMENT', desc: 'Compelling content, interactive demos, and value propositions hold their attention.' },
  { step: '03', title: 'LEAD', desc: 'Visitors exchange contact information for high-value resources, evaluations, or audits.' },
  { step: '04', title: 'QUALIFICATION', desc: 'Automated questionnaires and scoring ensure your team only speaks with ready-to-buy prospects.' },
  { step: '05', title: 'SALE', desc: 'Seamless booking, frictionless checkout, and decisive value presentation close deals.' },
  { step: '06', title: 'RETENTION', desc: 'Automated onboarding and touchpoints transform one-time customers into brand advocates.' },
  { step: '07', title: 'GROWTH', desc: 'Referral loops, automated cross-sells, and compounding customer lifetime value.' }
];

export const AUTOMATION_WORKFLOW_STEPS = [
  { role: 'CUSTOMER', label: 'Customer Visit', icon: 'User', desc: 'Prospect lands on website or social ad' },
  { role: 'WEBSITE', label: 'Interactive Capture', icon: 'Globe', desc: 'Instant engagement via smart form or chat' },
  { role: 'AI ASSISTANT', label: 'AI Intelligence', icon: 'Bot', desc: '24/7 natural language response & screening' },
  { role: 'LEAD QUALIFICATION', label: 'Lead Scoring', icon: 'Sliders', desc: 'Filters budget, timeline, and requirement' },
  { role: 'CRM', label: 'Instant CRM Sync', icon: 'Database', desc: 'Enriches contact profile in unified system' },
  { role: 'FOLLOW-UP', label: 'Multi-Channel Push', icon: 'Send', desc: 'Instant WhatsApp, SMS, and email sequence' },
  { role: 'SALES', label: 'High-Value Close', icon: 'Award', desc: 'Sales rep meets pre-qualified, warm buyer' }
];

export const AUTOMATION_EXAMPLES = [
  { title: 'Instant Lead Response', desc: 'Respond to new web leads in under 30 seconds rather than waiting hours.' },
  { title: 'AI Customer Support', desc: 'Resolve frequent questions 24/7 without growing support headcount.' },
  { title: 'Lead Qualification', desc: 'Collect budget, project scope, and urgency before scheduling calls.' },
  { title: 'WhatsApp Workflows', desc: 'Direct chat automation for high-open-rate prospect interactions.' },
  { title: 'Appointment Booking', desc: 'Sync calendars, handle time zones, and eliminate scheduling friction.' },
  { title: 'Email Follow-up', desc: 'Behavioral nurture sequences triggered by specific prospect actions.' },
  { title: 'Customer Reminders', desc: 'Automate renewal alerts, appointment reminders, and payment nudges.' },
  { title: 'AI Content Assistance', desc: 'Streamline social, blog, and email drafts aligned to brand voice.' },
  { title: 'Internal Workflow Automation', desc: 'Connect Slack, Google Workspace, CRM, and project boards automatically.' },
  { title: 'Executive Reporting', desc: 'Automated weekly snapshots of revenue, leads, and conversion metrics.' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Deep Immersion',
    description: 'Understand the business, audience and goals. We analyze your market positioning, current tech stack, unit economics, and target buyers.'
  },
  {
    step: '02',
    title: 'STRATEGY',
    subtitle: 'Growth Blueprint',
    description: 'Create the right digital growth strategy. We map user journeys, conversion milestones, funnel architecture, and tech infrastructure.'
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Engineering & Craft',
    description: 'Develop the website, brand and digital infrastructure. Fast, responsive, accessible, and structured for maximum trust and engagement.'
  },
  {
    step: '04',
    title: 'LAUNCH',
    subtitle: 'Production Go-Live',
    description: 'Launch the website and marketing systems. Rigorous QA, analytics event tracking, tracking pixel validation, and zero-downtime deployment.'
  },
  {
    step: '05',
    title: 'GROW',
    subtitle: 'Demand Acceleration',
    description: 'Generate traffic, leads and customers. Activate targeted paid channels, content distribution, organic SEO, and conversion optimization.'
  },
  {
    step: '06',
    title: 'AUTOMATE',
    subtitle: 'Scale & Optimization',
    description: 'Automate repetitive processes and optimize the business. Connect CRM workflows, AI agents, WhatsApp triggers, and reporting pipelines.'
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-1',
    clientName: '[Client Name — Enterprise B2B]',
    industry: '[B2B Industrial Services]',
    challenge: 'Fragmented website with zero automated lead capture and a slow 48-hour manual quote turnaround.',
    solution: 'Re-engineered responsive corporate web platform integrated with custom instant quote calculator and CRM workflow.',
    services: ['Website Development', 'Lead Generation', 'CRM Workflow Automation'],
    resultMetric: '+XX% Leads',
    resultDescription: 'Significantly elevated qualified inbound inquiries and reduced first-touch response time to minutes.',
    isPlaceholderNotice: true
  },
  {
    id: 'case-2',
    clientName: '[Client Name — Direct-to-Consumer]',
    industry: '[eCommerce & Lifestyle Retail]',
    challenge: 'High ad spend with low conversion rates and abandoned checkouts due to slow mobile shopping experience.',
    solution: 'Built high-speed headless eCommerce storefront paired with segmented retargeting and automated cart recovery.',
    services: ['eCommerce Development', 'Sales Funnel', 'WhatsApp & Email Automation'],
    resultMetric: '+XX% Conversion',
    resultDescription: 'Enhanced checkout completion and recovered lost cart transactions through targeted automated triggers.',
    isPlaceholderNotice: true
  },
  {
    id: 'case-3',
    clientName: '[Client Name — Professional Practice]',
    industry: '[Healthcare & Wellness Group]',
    challenge: 'Front desk overwhelmed by repetitive booking questions while marketing campaigns drove unverified calls.',
    solution: 'Deployed 24/7 AI Booking Assistant and automated calendar scheduling integrated with SMS reminder sequences.',
    services: ['AI Automation', 'SEO & Local Search', 'WhatsApp Automation'],
    resultMetric: 'XX% Faster Response',
    resultDescription: 'Delivered round-the-clock booking capabilities and virtually eliminated appointment no-show rates.',
    isPlaceholderNotice: true
  },
  {
    id: 'case-4',
    clientName: '[Client Name — SaaS Provider]',
    industry: '[Cloud Software Solutions]',
    challenge: 'Disconnected marketing tools resulted in lost sales demos and inaccurate attribution data across marketing channels.',
    solution: 'Constructed an integrated growth stack connecting landing pages, HubSpot CRM, Google Ads API, and executive dashboards.',
    services: ['Website Development', 'Digital Marketing', 'Business Automation'],
    resultMetric: '+XX% Sales Qualified Pipeline',
    resultDescription: 'Streamlined prospect progression from initial web discovery directly to signed enterprise agreements.',
    isPlaceholderNotice: true
  }
];

export const WHY_US_BENEFITS = [
  {
    number: '01',
    title: 'Business First',
    description: 'We start with your business goal, not the technology. Every line of code and ad dollar serves your bottom-line profitability.'
  },
  {
    number: '02',
    title: 'Founder-Led Direct Execution',
    description: 'Direct collaboration with Co-Founders Ibrahim Samrat (Product Design) and Amit Hasan (Growth Marketing). Zero junior delegation or outsourced fluff.'
  },
  {
    number: '03',
    title: 'Growth Focused',
    description: 'We design systems around measurable business outcomes — qualified leads, customer acquisition cost, and revenue.'
  },
  {
    number: '04',
    title: 'Modern Technology',
    description: 'We use modern web, marketing and AI technologies that ensure lightning performance, airtight security, and easy scaling.'
  },
  {
    number: '05',
    title: 'Scalable Solutions',
    description: 'Start small and expand as your business grows. Our modular digital architectures evolve smoothly with your company.'
  },
  {
    number: '06',
    title: 'Long-Term Support',
    description: 'We can continue supporting your digital business after launch through continuous optimization, updates, and strategic guidance.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    subtitle: 'Establishing Digital Presence',
    targetAudience: 'For businesses establishing their digital presence with a rock-solid, professional foundation.',
    features: [
      'High-converting modern website build (Next.js / React)',
      'Fully mobile responsive & SEO-ready structure',
      'Fast performance (sub-second load) & SSL security hardening',
      'Lead capture form & instant WhatsApp/Email alerts',
      'Google Analytics 4, Tag Manager & Meta Pixel setup',
      'Initial brand style synchronization & typography',
      'Free 1-year high-speed hosting setup & 30-day warranty'
    ],
    badge: 'Foundation',
    pricing: {
      USD: {
        regular: 499,
        discounted: 375,
        displayRegular: '$499',
        displayDiscounted: '$375',
        period: 'one-time starting from',
        comparisonNote: 'Save 60% compared to typical US agencies while getting full-stack modern code'
      },
      BDT: {
        regular: 18500,
        discounted: 13800,
        displayRegular: '৳১৮,৫০০',
        displayDiscounted: '৳১৩,৮০০',
        period: 'এককালীন (Starting From)',
        comparisonNote: 'বাংলাদেশের অন্যান্য এজেন্সির (৳২৫,০০০-৳৩৫,০০০) চেয়ে সাশ্রয়ী ও প্রিমিয়াম ইউএস টেকনোলজি'
      }
    }
  },
  {
    id: 'pro',
    name: 'PRO',
    subtitle: 'Accelerating Customer Acquisition',
    targetAudience: 'For businesses actively looking to grow their customer base and scale online revenue.',
    features: [
      'Complete high-performance website or eCommerce platform',
      'Targeted Digital Marketing campaign setup & execution',
      'High-converting sales funnel & dynamic lead magnets',
      'Google Ads & Meta (FB/Insta) marketing strategy',
      'CRM integration & automated lead routing pipeline',
      'AI Lead Response & instant booking workflow',
      'Bi-weekly performance, speed & conversion optimization',
      'Priority direct engineer support & maintenance'
    ],
    badge: 'Most Popular',
    isPopular: true,
    pricing: {
      USD: {
        regular: 1199,
        discounted: 899,
        displayRegular: '$1,199',
        displayDiscounted: '$899',
        period: 'one-time starting from',
        comparisonNote: 'Enterprise web platform + performance marketing funnel at ultra-competitive US rates'
      },
      BDT: {
        regular: 42000,
        discounted: 31500,
        displayRegular: '৳৪২,০০০',
        displayDiscounted: '৳৩১,৫০০',
        period: 'এককালীন (Starting From)',
        comparisonNote: 'লোকাল এজেন্সির তুলনায় ৪০% সাশ্রয়ী মূল্যে ফুল-স্ট্যাক ওয়েবসাইট + মার্কেটিং ফানেল'
      }
    }
  },
  {
    id: 'growth-partner',
    name: 'GROWTH PARTNER',
    subtitle: 'Comprehensive Digital Transformation',
    targetAudience: 'For businesses looking for ongoing marketing, technology and automation support as an extension of their team.',
    features: [
      'Full-stack digital growth & technology team dedicated to you',
      'Continuous website evolution & custom feature development',
      'Multi-channel ad management, creative testing & budget scaling',
      'Custom AI Chatbots & automated customer support agents',
      'WhatsApp, SMS & CRM workflow automation pipelines',
      'Dedicated Growth Strategist & Senior Tech Lead',
      'Weekly performance reviews & real-time metric dashboards',
      'Unlimited technical maintenance & guaranteed 2-hour SLA'
    ],
    badge: 'Enterprise Partner',
    pricing: {
      USD: {
        regular: 1999,
        discounted: 1499,
        displayRegular: '$1,999',
        displayDiscounted: '$1,499',
        period: 'per month (cancel anytime)',
        comparisonNote: 'Dedicated full-stack growth team at 1/4th the salary of a single in-house engineer'
      },
      BDT: {
        regular: 75000,
        discounted: 56000,
        displayRegular: '৳৭৫,০০০',
        displayDiscounted: '৳৫৬,০০০',
        period: 'প্রতি মাসে (মাসিক গ্রোথ পার্টনারশিপ)',
        comparisonNote: 'একটি পুরো ইন-হাউস টিম (ডেভেলপার + মার্কেটার + ডিজাইনার) নিয়োগের খরচের ১/৩ অংশ'
      }
    }
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: '[Client testimonial goes here — Demonstrating the transformative shift from fragmented tools to a unified growth engine that reliably delivers high-value qualified leads.]',
    name: '[Client Name]',
    position: '[Position, e.g., Chief Executive Officer]',
    company: '[Company Name — B2B Services]',
    tag: 'Sample Placeholder'
  },
  {
    quote: '[Client testimonial goes here — Illustrating how the combination of modern web architecture and automated lead follow-up significantly elevated conversion efficiency.]',
    name: '[Client Name]',
    position: '[Position, e.g., Managing Director]',
    company: '[Company Name — eCommerce & Retail]',
    tag: 'Sample Placeholder'
  },
  {
    quote: '[Client testimonial goes here — Highlighting how AI automation and CRM integration eliminated hours of manual data handling each week while accelerating customer response.]',
    name: '[Client Name]',
    position: '[Position, e.g., Head of Growth]',
    company: '[Company Name — Technology Firm]',
    tag: 'Sample Placeholder'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How much does a website cost?',
    answer: 'Because we design custom digital business systems rather than one-size-fits-all templates, investment depends on your specific goals, required features (e.g., custom funnels, eCommerce, CRM integrations), and automation needs. We provide transparent, custom quotes tailored to deliver measurable return on investment for your business scale.'
  },
  {
    question: 'How long does a website take to build?',
    answer: 'A standard high-performance corporate website typically launches within 2 to 4 weeks, while comprehensive eCommerce platforms or systems with custom AI workflows take 4 to 8 weeks. We work in clear, transparent milestones from discovery and wireframing through to final QA and go-live.'
  },
  {
    question: 'Do you provide eCommerce websites?',
    answer: 'Yes. We engineer high-converting eCommerce stores optimized for speed, mobile shopping, effortless checkout, and inventory sync. Our eCommerce systems are built to maximize average order value, reduce cart abandonment, and integrate directly with payment and logistics platforms.'
  },
  {
    question: 'Can you manage our digital marketing?',
    answer: 'Absolutely. We manage multi-channel digital marketing including Google Ads, Meta (Facebook & Instagram) ads, LinkedIn campaigns, and retargeting funnels. We focus on acquisition costs, qualified leads, and measurable revenue rather than vanity metrics like impressions.'
  },
  {
    question: 'Do you provide SEO?',
    answer: 'Yes. Every digital platform we build includes robust technical SEO foundations: semantic HTML, fast loading speeds, structured schema markup, and responsive architecture. We also provide ongoing content strategy, high-intent keyword ranking, and local search optimization.'
  },
  {
    question: 'Can you generate leads for our business?',
    answer: 'Yes. Lead generation is one of our primary growth engines. We build complete acquisition systems combining targeted ad creative, high-converting landing pages, qualifying questionnaires, and automated scheduling so your sales team speaks only with qualified prospects.'
  },
  {
    question: 'What is AI business automation?',
    answer: 'AI business automation uses modern artificial intelligence to execute repetitive business workflows without human bottlenecks. Examples include intelligent chatbots that qualify web visitors 24/7, automated instant lead replies, CRM data routing, appointment booking, and automated reporting.'
  },
  {
    question: 'Can you automate WhatsApp and customer follow-up?',
    answer: 'Yes. We construct automated multi-channel follow-up sequences using WhatsApp Business API, SMS, and email. When a prospective lead submits an inquiry, they receive an immediate, personalized message, qualifying prompts, and easy booking options in seconds.'
  },
  {
    question: 'Do you provide ongoing website maintenance?',
    answer: 'Yes. We offer continuous maintenance and technology support packages that include security monitoring, cloud hosting management, daily backups, performance tuning, and on-demand feature improvements to ensure your digital presence is always operating at peak efficiency.'
  },
  {
    question: 'Can you manage our complete online business?',
    answer: 'Yes. Through our Growth Partner model, LeadNest IT operates as your dedicated technology and digital growth department. We handle your website evolution, marketing campaigns, lead funnels, and AI automation workflows so you can concentrate completely on client fulfillment and leadership.'
  }
];
