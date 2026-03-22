export type PricingPlan = {
  id: string;
  planName: string;
  price: string;
  priceNote: string;
  features: string[];
  notIncluded: string[];
  recommended?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'template',
    planName: 'Template',
    price: 'From ¥30,000',
    priceNote: 'Template purchase only (customization quoted separately)',
    features: [
      'Full template source code',
      'Setup and deployment guide',
      'Cloudflare Pages compatible',
      'One email Q&A session included',
    ],
    notIncluded: [
      'Customization or feature additions',
      'Ongoing maintenance or support',
      'Production operations assistance',
      'Security audits',
    ],
  },
  {
    id: 'poc',
    planName: 'PoC Development',
    price: 'From ¥150,000',
    priceNote: 'Varies by scope, complexity, and timeline',
    features: [
      'Requirements scoping and clarification',
      'Template-based PoC implementation',
      'Deployed working environment',
      'Lightweight handover documentation',
      'Limited revision rounds (1–2)',
    ],
    notIncluded: [
      'Production operations or ongoing maintenance',
      'Unlimited revisions or feature additions',
      'Security hardening or load testing',
      'SLA or uptime guarantees',
    ],
    recommended: true,
  },
  {
    id: 'custom',
    planName: 'Custom Quote',
    price: 'Contact us',
    priceNote: 'Individually scoped and quoted',
    features: [
      'Template customization beyond standard scope',
      'Extended PoC development engagement',
      'Multi-template combinations',
    ],
    notIncluded: [
      'Large-scale or enterprise development',
      'Ongoing team-based development contracts',
    ],
  },
];

export const disclaimer = `
All prices listed are estimates, excluding tax.
Final pricing is confirmed via individual quotation.
Services are intended for proof-of-concept use only.
Production readiness, security, and uptime are not guaranteed.
Maintenance and unlimited revisions are not included.
`.trim();
