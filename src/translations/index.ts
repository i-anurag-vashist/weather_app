
import { en } from './en';
import { hi } from './hi';
import { pa } from './pa';
import { Language } from '../contexts/LanguageContext';

// Combine all translations
const translations = {
  en,
  hi,
  pa,
};

// Function to get translation based on the current language
export const getTranslation = (language: Language) => {
  return translations[language] || translations.en;
};
