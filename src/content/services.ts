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
    name: '小規模DX向けPoC開発',
    summary:
      '業務課題に合わせた小規模PoC（概念実証）をスピード重視で開発します。テンプレートをベースに短期・低コストで動くものを作り、DX推進の第一歩を支援します。',
    targetCustomer: [
      '中小企業・小規模事業者でDXに踏み出したい方',
      '大規模開発の前に小さく検証したい方',
      'コストを抑えて最低限動くプロトタイプが欲しい方',
      '海外の小規模ビジネスオーナーで英語対応可能な案件',
    ],
    deliverables: [
      '要件のヒアリング・整理',
      'テンプレートベースのPoC実装',
      'デプロイ済みの動作環境（Cloudflare Pages等）',
      '簡易ドキュメント',
    ],
    priceRange: '¥150,000〜（内容・規模により変動）',
    scope: [
      '静的サイト・ランディングページ',
      '簡易業務ツール・管理画面PoC',
      'APIとの連携実証',
      'Astro / Next.js / Cloudflare Pages ベース',
    ],
    fitFor: [
      '短期間で試したい',
      'まず動くものを見てから判断したい',
      '保守・運用を自社で対応できる',
      '仕様が固まっていない段階でも進められる',
    ],
    notFitFor: [
      '本番運用を前提とした本格システム開発',
      '無制限の修正・保守対応を期待する場合',
      '大規模チーム開発・エンタープライズ案件',
      '要件が全く決まっていない状態での丸投げ',
    ],
  },
  {
    id: 'template-sales',
    name: 'PoCテンプレート販売＋限定受注',
    summary:
      '用途別に整備したPoCテンプレートを販売します。購入したテンプレートへのカスタマイズ対応を限定的に受注する形で、低コストで始められる選択肢を提供します。',
    targetCustomer: [
      'コストを最小限に抑えてPoC環境を作りたい方',
      '自社開発者がいてテンプレートをカスタマイズできる方',
      '決まった用途でスピード重視の方',
      '海外フリーランサー・スモールチーム',
    ],
    deliverables: [
      'テンプレートのソースコード一式',
      'セットアップガイド',
      '限定カスタマイズ対応（別途見積）',
    ],
    priceRange: 'テンプレート単体：¥30,000〜 / カスタマイズ：¥50,000〜',
    scope: [
      '静的サイト・LPテンプレート（Template A）',
      '管理画面・ダッシュボードPoC（将来展開予定）',
      'Astro / Cloudflare Pages 対応テンプレート',
    ],
    fitFor: [
      '決まった用途のテンプレートを探している',
      '自分でカスタマイズできる技術力がある',
      '初期コストを最小化したい',
      'すぐ試して自走できる',
    ],
    notFitFor: [
      'テンプレートに含まれない機能を一から作りたい場合',
      '継続的な開発・改善を外注したい場合',
      '本格的なSaaS・プロダクト開発',
    ],
  },
];
