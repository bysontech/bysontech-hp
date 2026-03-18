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
    label: 'メールで問い合わせる',
    url: 'mailto:contact@bysontech.com',
    description: 'ご質問・ご相談・お見積もり依頼はメールにてお気軽にどうぞ。',
    external: false,
  },
  {
    id: 'upwork',
    method: 'Upwork',
    label: 'Upwork で依頼する',
    url: 'https://www.upwork.com',
    description: 'Upwork 経由でのご依頼に対応しています。英語案件歓迎。',
    external: true,
  },
  {
    id: 'linkedin',
    method: 'LinkedIn',
    label: 'LinkedIn でつながる',
    url: 'https://www.linkedin.com',
    description: 'LinkedIn からのメッセージ・コネクトもお気軽にどうぞ。',
    external: true,
  },
];

export const contactNote =
  '※ フォームによる自動返信はありません。確認後、2〜3営業日以内にご返信いたします。';
