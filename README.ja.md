# GoogleTranslationAPI

Google Cloud Translation API を使用するためのライブラリです。

## 機能
- Node.js をサポート
- Deno には非対応

## 必要条件
- Google Cloud Platform のプロジェクトIDと認証情報が必要です

## 使い方

1. 必要なパッケージをインストールします:
```
npm install @google-cloud/translate
```

2. `GOOGLE_APPLICATION_CREDENTIALS` 環境変数に Google Cloud Platform の認証情報のパスを設定します:
```
export GOOGLE_APPLICATION_CREDENTIALS=./apikey/codeforfukui-1362-cedbf3d2144a.json
```

3. ライブラリを使用してテキストを翻訳します:
```javascript
const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;

const projectId = 'codeforfukui-1362';
const location = 'global';
const text = "日本語を翻訳してほしい";

const translationClient = new TranslationServiceClient();

async function translateText() {
  const request = {
    parent: translationClient.locationPath(projectId, location),
    contents: [text],
    mimeType: 'text/plain',
    sourceLanguageCode: 'ja',
    targetLanguageCode: 'en',
  };

  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(translation.translatedText);
  }
}

translateText();
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
