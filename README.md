# WebApp Sandbox
よく使う言語・ライブラリでサクッとWebAppを作るためのサンドボックス

# 使い方
1. コンテナビルド: `docker-compose build`
1. 依存モジュールインストール:
    - Express: `docker-compose run express yarn`
    - Vue: `docker-compose run vue yarn`
    - Flask: (ビルド時にやってくれる)
1. 起動: `docker-compose up`

# サーバ構成
フロント、バックエンド、DBのよくあるWebAppのアーキテクチャ

- フロント
    - Vuetify
- バックエンド(どちらを使っても良い)
    - Express
    - Flask
- DB
    - PostgreSQL

## Vuetify
- vuetify
- vuex
- typescript

## Express
- express
- typescript
- typeorm

## Flask
- flask

## PostgreSQL
- postgres