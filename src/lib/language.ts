import { translations } from './translations';
import { TranslationValue } from '@/types/translations';

type Language = 'en' | 'ko';

let currentLanguage: Language = 'en';

export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
};

export const getLanguage = (): Language => {
  return currentLanguage;
};

export const t = (key: string, lang: Language = currentLanguage): string | string[] => {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for language ${lang}`);
      return key; // Return key as string if not found
    }
  }

  if (typeof value === 'string') {
    return value;
  } else if (Array.isArray(value)) {
    return value;
  } else if (typeof value === 'object') {
    // If it's an object, it means we tried to render a nested object directly.
    // This is not directly renderable by React. Return empty string to prevent rendering errors.
    console.warn(`Translation value for key: ${key} in language ${lang} is an object and cannot be rendered directly.`);
    return '';
  }

  console.warn(`Translation value is not a valid type for key: ${key} in language ${lang}`);
  return key; // Fallback
}; 