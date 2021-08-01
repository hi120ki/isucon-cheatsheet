---
sidebar_position: 1
---

# Introduction

[ISUCON 公式 Blog](http://isucon.net/)

お題となるWebサービスを限界まで高速化するチューニングコンテスト

### サービスのボトルネックを解消する

「チューニング → 計測 → ボトルネックを見つける」を繰り返す

### チームのボトルネックを解消する

- 全員の手が止まらないように作業の分担
- お互いの作業の邪魔をしない

### 開発のボトルネックを解消する

- コミットは小さく
- コミットログをきちんと書く
- 間違ったらすぐ戻すことができる開発環境
  - ISUCONはベンチマーク失敗で0点になるので必ずロールバックできるように
  - GitHubのプルリク機能はページからrevertができて楽

### Tips

- 闇雲にコードを書かない
- 最初 30 分はコードを書かない。まずはドキュメントを読んで動作確認
  - ユーザーストーリーでイメージを掴む
  - ベンチマークの動作を確認
  - スコア計算を確認
  - 重要なエンドポイントはどこか、遅くていいエンドポイントはどこか理解する
- ベンチマークスコアは高速化の指針にはならない。気にしない
- APIやDBのどこにボトルネックがあるか計測結果から分析できるようにしておく
  - Nginx access log
  - MySQL slow query log
  - Netdata metrics
  - pprof (Golang)