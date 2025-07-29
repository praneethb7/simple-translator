import axios from "axios";

const API_KEY = import.meta.env.VITE_HUGGINGFACE_API_KEY;

// 1. Language Pair → Model Map
const modelMap: Record<string, string> = {
  "en-hi": "Helsinki-NLP/opus-mt-en-hi",
  "en-fr": "Helsinki-NLP/opus-mt-en-fr",
  "en-es": "Helsinki-NLP/opus-mt-en-es",
  "fr-en": "Helsinki-NLP/opus-mt-fr-en",
  "hi-en": "Helsinki-NLP/opus-mt-hi-en",
  "es-en": "Helsinki-NLP/opus-mt-es-en",
};


export const translateText = async (
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<string> => {
  const modelKey = `${sourceLang}-${targetLang}`;
  const selectedModel = modelMap[modelKey];

  if (!selectedModel) {
    return `⚠️ No model found for ${sourceLang} → ${targetLang}`;
  }

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${selectedModel}`,
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const translations = response.data;
    if (Array.isArray(translations) && translations[0]?.translation_text) {
      return translations[0].translation_text;
    } else {
      return "⚠️ Unexpected API response";
    }
  } catch (error: any) {
    console.error("Translation failed:", error);
    return "❌ Translation failed.";
  }
};
