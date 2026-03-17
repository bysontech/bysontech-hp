# cycle-01 plan

project: bysontech-hp
phase: implementation
cycle: 01

## このサイクルの目的
Astroベースの静的コーポレートサイトとして、基本設計で定義した5ページと共通レイアウトを最小構成で実装し、主要導線が一通り動作する状態にする。

## 対象ユースケース
ユーザーがサイトに訪問し、
1. Topページでサービス概要を把握できる
2. Servicesページで2つのサービス詳細を確認できる
3. Pricingページで料金体系を比較できる
4. FAQページで疑問を自己解決できる
5. Contactページから外部連絡手段へ遷移できる

## スコープ内
- Astroプロジェクトの基本ページ構成作成
- 共通レイアウトの実装
- Header / Footer / CTA Section / SEO Head の共通化
- `src/content/` 配下の静的データ定義
- Top / Services / Pricing / FAQ / Contact の5ページ実装
- FAQの開閉実装（`details` / `summary` 優先）
- モバイルメニューの最小実装
- レスポンシブ対応の土台実装
- 外部リンクの `target="_blank"` 対応
- タイトル / meta description の最低限設定

## スコープ外
- 多言語対応
- CMS導入
- 問い合わせフォームの自前実装
- ブログ機能
- 認証
- API / DB
- 高度なアニメーション
- アクセス解析導入
- テスト / CI整備
- 法的ページの本実装（リンク枠のみ）
- OGP画像の作り込み

## 実装方針
- 静的サイト前提で最小構成を優先する
- コンテンツは `src/content/*.ts` に集約する
- ページ側に文言を直書きしすぎない
- JSは最小限にとどめる
- 既存構成を壊さず、不要な依存は追加しない

## 期待成果物
- 動作するAstroページ一式
- `src/content/site.ts`
- `src/content/services.ts`
- `src/content/pricing.ts`
- `src/content/faq.ts`
- `src/content/contact.ts`
- 共通レイアウト / 共通コンポーネント
- 5ページのルーティング実装

## 完了条件
- `/`
- `/services/`
- `/pricing/`
- `/faq/`
- `/contact/`
の5ページが表示できる
- 共通ヘッダー / フッターが各ページで利用されている
- FAQ開閉が動作する
- Contactの外部リンク遷移ができる
- モバイルメニューが最低限動作する
- ビルドが通る
- 基本設計のスコープを逸脱していない

## 人レビュー観点
- サービス内容の表現が営業上問題ないか
- 料金表現が過剰な断定になっていないか
- 問い合わせ導線のリンク先が妥当か
- デザイン実装が過度に膨らんでいないか

## 次サイクル候補
- 文言調整とデザイン微修正
- Lighthouse改善
- `_headers` によるセキュリティヘッダ整備
- OGP / SEO改善