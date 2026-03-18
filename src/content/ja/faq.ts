export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  // サービス全般
  {
    id: 'general-1',
    category: 'サービス全般',
    question: 'BysonTech はどんな会社ですか？',
    answer:
      'BysonTech は、中小企業・小規模事業者のDX推進を支援するPoC開発・テンプレート販売を行っています。短期・低コストで動くものを作り、DXの第一歩を支援することに特化しています。',
  },
  {
    id: 'general-2',
    category: 'サービス全般',
    question: '英語での対応は可能ですか？',
    answer:
      '英語でのやり取りに対応しています。海外の小規模事業者・フリーランスからのご相談もお気軽にどうぞ。',
  },
  {
    id: 'general-3',
    category: 'サービス全般',
    question: '2つのサービスの違いは何ですか？',
    answer:
      'PoC開発プランはヒアリングから実装まで一緒に進めるフルサポート型です。テンプレートプランは用途別テンプレートを購入して自分でカスタマイズするセルフスタート型です。技術力と予算に応じてお選びください。',
  },
  // PoC開発
  {
    id: 'poc-1',
    category: 'PoC開発について',
    question: 'どんなものが作れますか？',
    answer:
      '静的サイト・LP・簡易業務ツール・管理画面PoC・API連携の実証などが対象です。Astro / Next.js / Cloudflare Pages を主に使用します。大規模なシステム開発や本格的なSaaS構築は対象外です。',
  },
  {
    id: 'poc-2',
    category: 'PoC開発について',
    question: '納期の目安はどのくらいですか？',
    answer:
      '内容によりますが、テンプレートベースで2〜4週間を目安としています。要件が複雑な場合はご相談ください。',
  },
  {
    id: 'poc-3',
    category: 'PoC開発について',
    question: '本番運用のサポートはありますか？',
    answer:
      'PoCとして動く状態までの提供が基本です。本番運用・保守・監視・セキュリティ対応は含まれません。本番移行後の運用は自社での対応をお願いしています。',
  },
  {
    id: 'poc-4',
    category: 'PoC開発について',
    question: '仕様が決まっていなくても相談できますか？',
    answer:
      'ざっくりとした課題感からのご相談は歓迎です。ただし、仕様が全く決まっていない状態での丸投げ・包括的な要件定義サポートはスコープ外です。',
  },
  // テンプレート
  {
    id: 'template-1',
    category: 'テンプレートについて',
    question: 'テンプレートはどこで購入できますか？',
    answer:
      '現在、テンプレートの販売経路については準備中です。Contactページよりお問い合わせください。',
  },
  {
    id: 'template-2',
    category: 'テンプレートについて',
    question: 'テンプレートを購入後にカスタマイズ対応してもらえますか？',
    answer:
      '限定的なカスタマイズ対応を別途受注しています。内容・規模により個別見積もりになります。まずはContactページよりご相談ください。',
  },
  // 契約・支払い
  {
    id: 'contract-1',
    category: '契約・支払い',
    question: '支払い方法は何に対応していますか？',
    answer:
      '銀行振込、Upwork 経由のお支払いに対応しています。詳細はお問い合わせ時にご確認ください。',
  },
  {
    id: 'contract-2',
    category: '契約・支払い',
    question: '価格はすべて税込みですか？',
    answer:
      '掲載している価格はすべて税別の目安金額です。最終的な金額は個別見積もりにてご案内します。',
  },
  {
    id: 'contract-3',
    category: '契約・支払い',
    question: '返金・キャンセルポリシーはありますか？',
    answer:
      '着手後のキャンセルは原則対応しておりません。着手前であれば個別にご相談ください。詳細は契約時にご確認いただきます。',
  },
];

export const faqCategories = [...new Set(faqItems.map((item) => item.category))];
