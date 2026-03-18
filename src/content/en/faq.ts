export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  // General
  {
    id: 'general-1',
    category: 'General',
    question: 'What does BysonTech do?',
    answer:
      'BysonTech helps small and micro businesses take their first step in digital transformation. We offer template-based PoC development and ready-to-use templates — keeping things fast, affordable, and clearly scoped.',
  },
  {
    id: 'general-2',
    category: 'General',
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work comfortably in English and welcome inquiries from small businesses and freelancers worldwide.',
  },
  {
    id: 'general-3',
    category: 'General',
    question: 'What is the difference between the two services?',
    answer:
      'Custom PoC Development is a full-service engagement — we scope, build, and deliver for you. Template Sales is a self-serve option where you buy a ready-made template and customize it yourself (with optional limited support from us). Choose based on your technical capacity and budget.',
  },
  // PoC Development
  {
    id: 'poc-1',
    category: 'PoC Development',
    question: 'What kinds of projects can you build?',
    answer:
      'Static sites, landing pages, simple internal tools, admin dashboard PoCs, and API integration prototypes. We primarily use Astro, Next.js, and Cloudflare Pages. We do not take on large-scale systems, SaaS platforms, or enterprise applications.',
  },
  {
    id: 'poc-2',
    category: 'PoC Development',
    question: 'How long does a typical PoC project take?',
    answer:
      'Template-based projects typically take 2–4 weeks. Timeline varies with complexity. Please reach out to discuss your specific case.',
  },
  {
    id: 'poc-3',
    category: 'PoC Development',
    question: 'Do you provide ongoing maintenance after delivery?',
    answer:
      'No. Our scope ends at a working PoC. Production operations, monitoring, and maintenance are the client\'s responsibility after handover. This is clearly defined upfront so there are no surprises.',
  },
  {
    id: 'poc-4',
    category: 'PoC Development',
    question: 'Can I reach out even if my requirements are not fully defined?',
    answer:
      'Absolutely — rough ideas and early-stage problem statements are welcome. That said, we cannot provide comprehensive requirements consulting or define your business goals from scratch. Come with a challenge, and we\'ll work through scope together.',
  },
  // Templates
  {
    id: 'template-1',
    category: 'Templates',
    question: 'Where can I purchase a template?',
    answer:
      'Template sales channels are currently being set up. Please contact us via the Contact page and we\'ll guide you through the process.',
  },
  {
    id: 'template-2',
    category: 'Templates',
    question: 'Can you customize a template after I purchase it?',
    answer:
      'Yes, we offer limited customization as a separate engagement. Scope and pricing depend on what you need. Reach out via the Contact page to get a quote.',
  },
  // Contracts & Payments
  {
    id: 'contract-1',
    category: 'Contracts & Payments',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfer and payments via Upwork. Details are confirmed during the engagement setup.',
  },
  {
    id: 'contract-2',
    category: 'Contracts & Payments',
    question: 'Are prices tax-inclusive?',
    answer:
      'All listed prices are estimates excluding tax. Final amounts are confirmed via individual quotation.',
  },
  {
    id: 'contract-3',
    category: 'Contracts & Payments',
    question: 'What is your cancellation policy?',
    answer:
      'Cancellation after work has started is generally not accepted. Pre-start cancellations can be discussed individually. Full terms are provided at the time of engagement.',
  },
];

export const faqCategories = [...new Set(faqItems.map((item) => item.category))];
