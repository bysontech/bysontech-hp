# implementation tasks: cycle-01

project: bysontech-hp
phase: implementation
cycle: 01

## ゴール
基本設計に基づき、5ページと共通コンポーネントを持つ最小のAstro静的サイトを実装し、主要導線が動作する状態にする。

## 前提
- 現在フェーズは `implementation`
- 前フェーズ成果物は `03-design/architecture.md`
- 既存構成を壊さない
- 不要な依存を追加しない
- スコープ外に手を出さない

## タスク一覧

### 1. コンテンツデータの作成
- [ ] `src/site-content/en/` と `ja/` 配下に各ファイルを作成（例: `en/site.ts`, `ja/site.ts`）
  - [ ] siteName
  - [ ] defaultDescription
  - [ ] ogImage
  - [ ] lang
- [ ] `services.ts`（各ロケール）
- [ ] `pricing.ts`（各ロケール）
  - [ ] プラン定義
  - [ ] features
  - [ ] notIncluded
  - [ ] disclaimer
- [ ] `faq.ts`（各ロケール）
  - [ ] category
  - [ ] question
  - [ ] answer
- [ ] `contact.ts`（各ロケール）
  - [ ] method
  - [ ] label
  - [ ] url
  - [ ] description

### 2. レイアウトと共通UI
- [ ] 共通レイアウトを作成
  - [ ] `title` の設定
  - [ ] `meta description` の設定
  - [ ] OGPの最低限設定
- [ ] Headerコンポーネントを作成
  - [ ] ロゴ表示
  - [ ] 5ページナビゲーション
  - [ ] モバイルメニュー開閉
- [ ] Footerコンポーネントを作成
  - [ ] コピーライト
  - [ ] ナビリンク
  - [ ] 法的ページリンク枠
- [ ] CTA Sectionコンポーネントを作成
  - [ ] 共通文言
  - [ ] Contactページまたは外部導線へのリンク

### 3. ページ実装
- [ ] Topページ `/`
  - [ ] ヒーロー
  - [ ] サービス概要カード x2
  - [ ] 差別化ポイント
  - [ ] CTA
- [ ] Servicesページ `/services/`
  - [ ] PoC開発詳細
  - [ ] テンプレート販売詳細
  - [ ] 比較表
  - [ ] 向いている人 / 向いていない人
  - [ ] CTA
- [ ] Pricingページ `/pricing/`
  - [ ] プラン比較表
  - [ ] 含まれるもの
  - [ ] 含まれないもの
  - [ ] 免責事項
  - [ ] CTA
- [ ] FAQページ `/faq/`
  - [ ] カテゴリ別Q&A
  - [ ] `details` / `summary` による開閉
  - [ ] CTA
- [ ] Contactページ `/contact/`
  - [ ] メール
  - [ ] 外部フォーム
  - [ ] Upwork
  - [ ] LinkedIn
  - [ ] 外部リンク設定

### 4. スタイルとレスポンシブ
- [ ] Tailwindの既存方針に沿ってレイアウト調整
- [ ] `sm:` / `md:` / `lg:` で崩れないことを確認
- [ ] モバイルでヘッダー導線が使えることを確認
- [ ] 表やカードの最小可読性を確保

### 5. 動作確認
- [ ] 全ページがルーティングされる
- [ ] ナビリンクが正しく遷移する
- [ ] FAQ開閉が動作する
- [ ] Contactの外部リンクが開く
- [ ] ビルドが通る

## 受け入れ条件
- 5ページが表示できる
- 共通レイアウトが適用されている
- コンテンツが `src/site-content/` に分離されている
- 最小JSで必要機能のみ動く
- スコープ外機能が入っていない
- 既存構成を壊していない

## 実装順の推奨
1. `src/site-content/` の定義
2. レイアウト / 共通コンポーネント
3. Top → Services → Pricing → FAQ → Contact
4. レスポンシブ調整
5. ビルド確認

## Claude Codeに渡す実装プロンプト
以下の設計に基づき、実装タスクを実行してください。

【現在のフェーズ】
implementation

【前フェーズの成果物】
bysontech-hp の基本設計:
- Top `/`
- Services `/services/`
- Pricing `/pricing/`
- FAQ `/faq/`
- Contact `/contact/`
- 共通コンポーネント: Header / Footer / CTA Section / SEO Head
- コンテンツは `src/site-content/{en,ja}/` 以下の `services.ts`, `pricing.ts`, `faq.ts`, `contact.ts`, `site.ts` に分離
- FAQ開閉は `details` / `summary` または最小JS
- モバイルメニューは最小JS
- 静的サイトのため API 不要
- Astro + Tailwind + Cloudflare Pages 前提
- 不要な依存追加は禁止

【今回のゴール】
5ページと共通レイアウトを持つ最小のAstro静的サイトを実装し、主要導線が動作する状態にする

制約：
- 既存構成を壊さない
- 不要な依存を追加しない
- スコープ外に手を出さない

完了条件：
- ビルドが通る
- Top / Services / Pricing / FAQ / Contact が表示できる
- FAQ開閉が動作する
- Contactの外部リンク遷移ができる
- モバイルメニューが最低限動作する