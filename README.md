# ｛アプリ名｝
｛アプリの概要｝



## 本番環境URL
※ドメイン設定後

〇〇

※ドメイン設定前

https://agreeable-field-0c5072200.6.azurestaticapps.net/

## デプロイ

このアプリは、SSR（サーバーサイドレンダリング）でデプロイされます。
SSGよりも高機能なNext.jsの機能が使えます。

### 本番環境への更新
- GithubActionsの自動デプロイ
- Mainにマージしたら自動的にデプロイが走る
- 結果はこちらで確認可能（https://github.com/rayns-a-jp/spanish-tourist-information-lp/actions）

### プレビュー環境
- PRを作るとプレビュー環境にデプロイが走る
- マージするとプレビュー環境が破棄される
- たまに破棄されない
- プレビュー環境が3つ貯まるとデプロイできなくなるので注意

### デプロイ時の注意点
ライブラリ更新時は、package-lock.json もコミットすること

## ローカル環境

```
pnpm install
pnpm dev

もしくは、

npm install
npm run dev
```
# test
