// Language translations
export const translations = {
  en: {
    hero: {
      badge: 'Emergency Response Active in 3 Regions',
      title1: 'Give Blood.',
      title2: 'Give Hope.',
      title3: 'Save Lives.',
      description:
        'HopeFlow connects blood donors, charity volunteers, and aid recipients during emergencies. Register online, receive your queue number, and skip the wait at donation centers.',
      buttonDonate: 'Donate Blood',
      buttonSupport: 'Support Campaign',
      buttonFind: 'Find Centers',
    },
  },
  kh: {
    hero: {
      badge: 'ក្រុមឆ្លើយតបគ្រាអាសន្ននៅក្នុងតំបន់ ៣ ដែល',
      title1: 'ផ្តល់ឈាម។',
      title2: 'ផ្តល់សង្ឈឹម។',
      title3: 'រំដៅជីវិតរបស់យើង។',
      description:
        'HopeFlow ភ្ជាប់អ្នកបរិច្ចាគឈាម អាสន្នសង្គមបេឧស្សាហ៍ និងអ្នកទទួលសម្ងាត់ក្នុងកំឡុងពេលបរាជ័យ។ ចុះឈ្មោះតាមលីនេអ៊ុង ទទួលលេខសម្មុកលេង របស់អ្នក ហើយលុបចោលការរង់ចាំនៅទីតាំងបរិច្ចាគឈាម។',
      buttonDonate: 'ផ្តល់ឈាម',
      buttonSupport: 'គាំទុកយុទ្ធសាស្ត្រ',
      buttonFind: 'ស្វាងរក មណ្ឌលកម្ពូល',
    },
  },
} as const;

export type Language = 'en' | 'kh';

export const defaultLanguage: Language = 'en';