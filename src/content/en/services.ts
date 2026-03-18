export type Service = {
  id: string;
  name: string;
  summary: string;
  targetCustomer: string[];
  deliverables: string[];
  priceRange: string;
  scope: string[];
  fitFor: string[];
  notFitFor: string[];
};

export const services: Service[] = [
  {
    id: 'poc-development',
    name: 'Custom PoC Development',
    summary:
      'We build a lean proof-of-concept tailored to your business challenge. Template-driven and delivery-focused, so you get something working fast without over-engineering.',
    targetCustomer: [
      'Small and micro businesses starting their DX journey',
      'Teams that want to validate an idea before committing to full development',
      'Founders who need a working prototype to show stakeholders',
      'International small businesses comfortable working in English',
    ],
    deliverables: [
      'Requirements scoping and clarification',
      'Template-based PoC implementation',
      'Deployed working environment (Cloudflare Pages or similar)',
      'Lightweight handover documentation',
    ],
    priceRange: 'From ¥150,000 (varies by scope and complexity)',
    scope: [
      'Static sites and landing pages',
      'Simple internal tools and dashboard PoCs',
      'API integration proofs-of-concept',
      'Astro / Next.js / Cloudflare Pages based projects',
    ],
    fitFor: [
      'You want results in weeks, not months',
      'You want to see something working before deciding next steps',
      'Your team can take ownership of operations after delivery',
      'Your requirements are rough — and that\'s OK',
    ],
    notFitFor: [
      'Production-grade systems requiring high availability or SLAs',
      'Projects expecting unlimited revisions or ongoing maintenance',
      'Large-team or enterprise-scale development',
      'Completely undefined scope with no business goal in mind',
    ],
  },
  {
    id: 'template-sales',
    name: 'PoC Template Sales + Limited Customization',
    summary:
      'Purchase a ready-to-use PoC template built for specific use cases. Customize it yourself, or hire us for scoped adjustments at a lower cost than a full custom build.',
    targetCustomer: [
      'Developers and small teams who want a head start',
      'Businesses with in-house technical capacity to self-customize',
      'Anyone who needs a specific type of site or tool, fast',
      'Freelancers and small agencies looking for reusable foundations',
    ],
    deliverables: [
      'Full source code of the selected template',
      'Setup and deployment guide',
      'Limited customization support (quoted separately)',
    ],
    priceRange: 'Template: from ¥30,000 / Customization: from ¥50,000',
    scope: [
      'Static site / LP templates (Template A)',
      'Dashboard and admin PoC templates (coming soon)',
      'Astro / Cloudflare Pages based stacks',
    ],
    fitFor: [
      'You have a specific use case that matches a template',
      'You or your team can handle customization independently',
      'You want the lowest possible upfront cost',
      'You prefer to move fast and own the result',
    ],
    notFitFor: [
      'Features outside the template\'s scope (requires custom build)',
      'Projects needing ongoing development or feature evolution',
      'Full SaaS or product development',
    ],
  },
];
