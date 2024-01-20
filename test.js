/*
export GOOGLE_APPLICATION_CREDENTIALS=./apikey/codeforfukui-1362-cedbf3d2144a.json
*/
const projectId = 'codeforfukui-1362';  // GCP上のプロジェクトIDを記載
const location = 'global';

const text = "日本語を翻訳してほしい";

// Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;

// Instantiates a client
const translationClient = new TranslationServiceClient();
async function translateText() {
  // Construct request
  const request = {
    parent: translationClient.locationPath(projectId, location),
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'ja',   // 日本語から。
    targetLanguageCode: 'en',   // 英語に。
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`${translation.translatedText}`);
  }
}

translateText();
