import { create } from 'zustand';
import { Language, defaultLanguage } from '@/constants/translations';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: defaultLanguage,
  setLanguage: (language: Language) => set({ language }),
}));