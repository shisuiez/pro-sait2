export type TranslationValue = 
  | string 
  | string[] 
  | Record<string, string | string[] | Record<string, any>>;

type TranslationKey = string;

type Translations = Record<TranslationKey, TranslationValue>;

export type TranslationType = {
  [key: string]: Record<string, TranslationValue>;
}; 