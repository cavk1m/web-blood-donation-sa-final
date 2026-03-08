import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, defaultLanguage } from '@/constants/translations';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  isHydrated: boolean;
}

const useLanguageStoreBase = create<LanguageStore>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language: Language) => {
        set({ language });
        // Also save to cookie for server-side rendering
        if (typeof window !== 'undefined') {
          document.cookie = `language=${language}; path=/; max-age=31536000`;
        }
      },
      isHydrated: false,
    }),
    {
      name: 'language-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    }
  )
);

export const useLanguageStore = useLanguageStoreBase;