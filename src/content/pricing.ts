export const plans = [
  {
    id: 'starter',
    name: 'スタータープラン',
    price: '要相談',
    description: '小規模プロジェクト向け。スポット対応から始めたい方に。',
    features: ['ヒアリング・要件整理', '小規模開発・改修', 'メールサポート'],
    cta: { label: 'お問い合わせ', href: '/contact/' },
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    price: '要相談',
    description: '継続的な開発・改善が必要な中規模プロジェクト向け。',
    features: ['月次レポート', '優先サポート', 'リリース管理支援'],
    cta: { label: 'お問い合わせ', href: '/contact/' },
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'エンタープライズ',
    price: '要相談',
    description: '大規模・複数システム連携など、個別要件に対応します。',
    features: ['専任担当者アサイン', 'SLA対応', 'カスタム開発'],
    cta: { label: 'お問い合わせ', href: '/contact/' },
  },
];

export const pricingNote = '※ 料金はプロジェクト規模・要件により変動します。詳細はお問い合わせください。';
