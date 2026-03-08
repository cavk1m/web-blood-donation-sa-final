import en from '@/i18n/en.json'
import kh from '@/i18n/kh.json'

export type Language = 'en' | 'kh'

export const translations = { en, kh }

export const getTranslation = (lang: Language, key: string) => {
  const keys = key.split('.')
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}
