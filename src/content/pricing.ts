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
    planName: 'テンプレートプラン',
    price: '¥30,000〜',
    priceNote: 'テンプレート購入のみ（カスタマイズ別途）',
    features: [
      'テンプレートソースコード一式',
      'セットアップガイド',
      'Cloudflare Pages デプロイ対応',
      'メール1往復の質問対応',
    ],
    notIncluded: [
      'カスタマイズ・機能追加',
      '保守・継続対応',
      '本番運用サポート',
      'セキュリティ監査',
    ],
  },
  {
    id: 'poc',
    planName: 'PoC開発プラン',
    price: '¥150,000〜',
    priceNote: '内容・規模・期間により変動',
    features: [
      '要件ヒアリング・整理',
      'テンプレートベースの実装',
      'デプロイ済み動作環境の提供',
      '簡易ドキュメント',
      '限定的な修正対応（1〜2回）',
    ],
    notIncluded: [
      '本番運用・継続保守',
      '無制限の機能追加・修正',
      'セキュリティ・負荷対策の本格実装',
      'SLA・稼働保証',
    ],
    recommended: true,
  },
  {
    id: 'custom',
    planName: 'カスタム相談',
    price: '要相談',
    priceNote: '内容によって個別見積もり',
    features: [
      'テンプレートへのカスタマイズ対応',
      'PoC開発プランの機能拡張',
      '複数テンプレートの組み合わせ',
    ],
    notIncluded: [
      '大規模開発・エンタープライズ対応',
      '継続的なチーム開発',
    ],
  },
];

export const disclaimer = `
本サービスはPoC（概念実証）用途を前提としています。
本番運用・商用利用における品質・セキュリティ・可用性の保証はいたしかねます。
保守・無制限修正は含まれません。
価格はすべて税別の目安金額です。最終的な金額は個別見積もりにてご確認ください。
`.trim();
