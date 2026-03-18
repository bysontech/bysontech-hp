export type ContactMethod = {
  id: string;
  method: string;
  label: string;
  url: string;
  description: string;
  external: boolean;
};

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    method: 'Email',
    label: 'Send us an email',
    url: 'mailto:contact@bysontech.com',
    description: 'For project inquiries, quotes, and general questions. We reply within 2–3 business days.',
    external: false,
  },
  {
    id: 'upwork',
    method: 'Upwork',
    label: 'Hire on Upwork',
    url: 'https://www.upwork.com',
    description: 'Prefer Upwork? You can reach us and manage contracts there. English engagements welcome.',
    external: true,
  },
  {
    id: 'linkedin',
    method: 'LinkedIn',
    label: 'Connect on LinkedIn',
    url: 'https://www.linkedin.com',
    description: 'Feel free to connect or send a message on LinkedIn.',
    external: true,
  },
];

export const contactNote =
  'No automated replies. We review all messages personally and respond within 2–3 business days.';
